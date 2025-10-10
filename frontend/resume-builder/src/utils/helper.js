import moment from "moment"
import html2canvas from "html2canvas"

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

//GET LIGHTEST AVERAGE COLOR
export const getLightColorFromImage = (imageUrl) => {
    return new Promise((resolve, reject) => {
        //CHECK IF imageUrl IS VALID
        if (!imageUrl || typeof imageUrl !== 'string') return reject(new Error("Invalid image URL"));

        const img = new Image();

        //IF NOT A BASE64 STRING, SET crossOrigin (IMPORTANT FOR CORS)
        if (!imageUrl.startsWith('data:')) img.crossOrigin = 'anonymous';

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

            let r = 0, g = 0, b = 0, count = 0;

            for (let i = 0; i < imageData.length; i += 4) {
                const red = imageData[i];
                const green = imageData[i + 1];
                const blue = imageData[i + 2];

                const brightness = (red + green + blue) / 3;

                //ONLY COUNT LIGHT PIXELS (TWEAK THRESHOLD AS NEEDED)
                if (brightness > 100) {
                    r += red;
                    g += green;
                    b += blue;
                    count++;
                }
            }
            
            if (count === 0) resolve("#fffffff");
            else {
                r = Math.round(r / count);
                g = Math.round(g / count);
                b = Math.round(b / count);
                resolve(`rgb${r}, ${g}, ${b}`);
            }
        };

        img.onerror = (e) => {
            console.error("Failed to load image:", e);
            reject(new Error('Image could not be loaded or is blocked by CORS.'));
        }
    });
};

//EX: March 2025
export function formatYearMonth(yearMonth) {
    return yearMonth ? moment(yearMonth, "YYYY-MM").format("MMM YYYY") : "";
}

export const fixTailWindColors = (e) => {
    const elements = e.querySelectorAll("*");

    elements.forEach((el) => {
        const style = window.getComputedStyle(el);

        ["color", "backgroundColor", "borderColor"].forEach((prop) => {
            const value = style[prop];
            if(value.includes("oklch")) el.style[prop] = "#000";    //OR ANY SAFE FALLBACK
        });
    });
};

//CONVERT COMPONENT TO IMAGE
export async function captureElementAsImages(e) {
    if(!e) throw new Error("No element provided!");

    const canvas = await html2canvas(e);
    return canvas.toDataURL("image/png");
};

//UTILITY TO CONVERT BASE64 DATA URL TO A FILE PROJECT
export const dataURLtoFile = (dataUrl, fileName) => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    
    let n = bstr.length;
    const uBarr = new Uint8Array(n);

    while(n--) uBarr[n] = bstr.charCodeAt(n);

    return new File([uBarr], fileName, { type: mime });
};

export function sanitizeForJSON(obj, seen = new WeakSet()) {
  if (obj === null || typeof obj !== "object") return obj;

  if (seen.has(obj)) return undefined; // Prevent circular reference
  seen.add(obj);

  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeForJSON(item, seen));
  }

  const cleanObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (
      typeof value === "function" ||
      value instanceof HTMLElement || // DOM node
      key.startsWith("__react") ||   // React internals
      key === "stateNode"            // React Fiber circular ref
    ) {
      continue;
    }

    cleanObj[key] = sanitizeForJSON(value, seen);
  }

  return cleanObj;
}
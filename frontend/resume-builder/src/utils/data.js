import TEMPLATE_ONE_PNG from "../assets/template-one.png"
import TEMPLATE_TWO_PNG from "../assets/template-two.png"
import TEMPLATE_THREE_PNG from "../assets/template-three.png"

export const resumeTemplates = [
    {
        id: '01',
        thumbnailImg: TEMPLATE_ONE_PNG,
        colorPaletteCode: 'themeOne',
    },

    {
        id: '02',
        thumbnailImg: TEMPLATE_TWO_PNG,
        colorPaletteCode: 'themeTwo',
    },

    {
        id: '03',
        thumbnailImg: TEMPLATE_THREE_PNG,
        colorPaletteCode: 'themeThree',
    },
]

export const themeColorPalette = {
    themeOne: [
        ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

        ['#E9FBF8', '#B4EFE7', '#93E2DA', '#2AC9A0', '#3D4C5A'],
        ['#F5F4FF', '#E0DBFF', '#C9C2F8', '#8579D1', '#4B4B5C'],
        ['#F0FAFF', '#D6F0FF', '#AFDEFF', '#3399FF', '#445361'],
        ['#FFF5F7', '#FFE0EC', '#FAC6D4', '#F6729C', '#5A5A5A'],
        ['#F9FAFB', '#E4E7EB', '#CBD5E0', '#7F9CF5', '#2D3748'],

        ['#F4FFFD', '#D3FDF2', '#B0E9D4', '#34C79D', '#384C48'],
        ['#FFF7F0', '#FFE6D9', '#FFD2BA', '#FF9561', '#4C4743'],
        ['#F9FCFF', '#E3F0F9', '#C0DDEE', '#6CA6CF', '#46545E'],
        ['#FFFDF6', '#FFF4D7', '#FFE7A0', '#FFD000', '#57534E'],
        ['#EFFCFF', '#C8F0FF', '#99E0FF', '#007BA7', '#2B3A42'],

        ['#F7F7F7', '#E4E4E4', '#CFCFCF', '#4A4A4A', '#222222'],
        ['#E3F2FD', '#90CAF9', '#a8d2f4', '#1E88E5', '#0D47A1'],

    ],
};

export const DUMMY_RESUME_DATA = {
    profileInfo: {
        profileImg: null,
        previewUrl: "",
        fullName: "John Doe",
        designation: "Software Developer",
        summary: "Resilient and detail-oriented developer with a passion for building interactive console applications in C and Java. Skilled in debugging complex logic errors and refining user experience through incremental improvements. Thrives on mastering fundamentals and crafting clean, maintainable code."
    },
    contactInfo: {
        email: "mikey@gmail.com",
        phone: "+1 812-3456-7890",
        location: "San Fransisco, USA",
        linkedin: "https://linkedin.com/in/shane-sutjipto",
        github: "https://github.com/shane-sandbox",
        website: "https://www.consolecraft.dev"
    },
    workExperience: [
        {
            company: "CodeForge Labs",
            role: "Junior Software Developer",
            startDate: "2023-01",
            endDate: "Present",
            description: "Developed and maintained console-based applications using C and Java. Led debugging efforts for control flow and board state issues in game logic. Collaborated with senior developers to improve code structure and user interaction patterns.",
        }
    ],
    education: [
        {
            degree: "B.Sc. in Computer Science",
            institution: "BINUS University",
            startDate: "2019-08",
            endDate: "2023-06",
        }
    ],
    skills: [
        {
            name: "C Programming",
            progress: 90,
        },
        {
            name: "Java",
            progress: 85,
        },
        {
            name: "Debugging & Logic Analysis",
            progress: 95,
        },
        {
            name: "Console UI Design",
            "progress": 80,
        },
        {
            name: "Algorithmic Thinking",
            progress: 88,
        }
    ],
    projects: [
        {
            title: "Tic-Tac-Toe Console Game",
            description: "An interactive C-based game with robust input handling, board rendering, and logic validation. Focused on clean code structure and user experience.",
            github: "https://github.com/shane-sandbox/tictactoe",
            liveDemo: "https://consolecraft.dev/tictactoe",
        }
    ],
    certifications: [
        {
            title: "Certified Debugging Specialist",
            issuer: "Debugging Academy",
            year: "2024",
        }
    ],
    languages: [
        {
            name: "English",
            "progress": 90,
        },
        {
            name: "Bahasa Indonesia",
            "progress": 95,
        }
    ],
    interests: [
        "Building games from scratch",
        "Reverse-engineering logic errors",
        "Learning through hints and puzzles",
        "Exploring console aesthetics",
        "Collaborating with AI companions"
    ],


}
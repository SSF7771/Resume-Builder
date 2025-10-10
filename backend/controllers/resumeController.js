const fs = require("node:fs");
const path = require("node:path");
const Resume = require("../models/Resume");
const router = require("../routes/authRoutes");

//@desc -> Create a new resume
//@route -> POST /api/resumes
//@access -> PRIVATE

exports.createResume = async (req, res) => {
    try {
        const { title } = req.body;

        const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: "",
                fullName: "",
                designation: "",
                summary: "",
            },
            contactInfo: {
                email: "",
                phone: "",
                location: "",
                linkedin: "",
                github: "",
                website: "",
            },
            workExperience: [
                {
                    company: "",
                    role: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                },
            ],
            education: [
                {
                    degree: "",
                    institution: "",
                    startDate: "",
                    endDate: "",
                },
            ],
            skills: [
                {
                    name: "",
                    progress: 0,
                },
            ],
            projects: [
                {
                    title: "",
                    description: "",
                    github: "",
                    liveDemo: "",
                },
            ],
            certifications: [
                {
                    title: "",
                    issuer: "",
                    year: "",
                },
            ],
            languages: [
                {
                    name: "",
                    progress: 0,
                },
            ],
            interests: [""],
        };

        const newResume = await Resume.create({
            userId: req.user._id,
            title,
            ...defaultResumeData,
        });

        res.status(201).json(newResume);

    } catch (error) {
        res.status(500).json({ message: "Failed to create resume", error: error.message });
    }
};

//@desc -> Get all resumes for logged-in user
//@route -> POST /api/resumes/:id
//@access -> PRIVATE

exports.getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.user._id })
        .sort({ updatedAt: -1 });

        res.json(resumes);

    } catch (error) {
        res.status(500).json({ message: "Failed to get resumes", error: error.message });
    }
};

//@desc -> Get a single resume by ID
//@route -> POST /api/resumes/:id
//@access -> PRIVATE

exports.getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, userId: req.user._id });

        if(!resume) return res.status(404).json({ message: "Resume not found!" });

        res.json(resume);

    } catch (error) {
        res.status(500).json({ message: "Failed to fetch resume", error: error.message });
    }
};

//@desc -> Update a resume
//@route -> POST /api/resumes/:id
//@access -> PRIVATE

exports.updateResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            _id: req.params.id,
            userId: req.user._id,
        });

        if(!resume) return res.status(404).json({ message: "Resume not found or unauthorized" });

        // MERGE UPDATES FROM req.body INTO EXISTING RESUME
        Object.assign(resume, req.body);

        // SAVE UPDATED RESUME
        const saveResume = await resume.save();

        res.json(saveResume);

    } catch (error) {
        res.status(500).json({ message: "Failed to find resume", error: error.message });
    }
};

//@desc -> Delete a resume
//@route -> POST /api/resumes/:id
//@access -> PRIVATE

exports.deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            _id: req.params.id,
            userId: req.user._id,
        });

        if(!resume) return res.status(404).json({ message: "Resume not found or unauthorized" });

        // DELETE thumbnailLink & profilepreviewUrl images from uploads folder
        const uploadsFolder = path.join(__dirname, '..', 'uploads');
        const baseUrl = `${req.protocol}://${req.get("host")}`;

        if(resume.thumbnailLink)
        {
            const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink));
            if(fs.existsSync(oldThumbnail)) fs.unlinkSync(oldThumbnail);
        }

        if(resume.profileInfo?.profilePreviewUrl)
        {
            const oldProfile = path.join(uploadsFolder, path.basename(resume.profileInfo.profilePreviewUrl));
            if(fs.existsSync(oldProfile)) fs.unlinkSync(oldProfile);
        }

        const deleted = await Resume.findOneAndDelete({
            _id: req.params.id,
            userId: req.user._id,
        });

        if(!deleted) return res.status(404).json({ message: "Resume not found or unauthorized" });

        res.json({ message: "Resume deleted successfully" });
        
    } catch (error) {
        res.status(500).json({ message: "Failed to create resume", error: error.message });
    }
};


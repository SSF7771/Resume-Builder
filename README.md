# Resume Builder

A full-stack resume creation and management application that allows users to create, update, preview, and manage professional resumes. The project includes a React frontend for a clean, user-friendly resume editing experience and a Node.js/Express backend with MongoDB for persistence and authentication.

## Overview

This repository contains a complete resume builder workflow with:

- User authentication and account management
- Resume creation and editing
- Resume dashboard for saved resumes
- Resume preview and export-friendly viewing
- Profile image upload support
- JWT-based protected routes
- Modern frontend UI with React and Tailwind CSS

## Tech Stack

Frontend
- React 19
- Vite
- React Router
- Tailwind CSS
- Axios
- React Hot Toast
- React Icons
- HTML2Canvas
- React-to-Print

Backend
- Node.js
- Express 5
- MongoDB with Mongoose
- JWT authentication
- Multer for file uploads
- CORS
- dotenv

## Repository Structure

```text
Resume-Builder/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── package-lock.json
├── frontend/
│   └── resume-builder/
│       ├── public/
│       ├── src/
│       ├── .gitignore
│       ├── package.json
│       ├── vite.config.js
│       ├── index.html
│       ├── eslint.config.js
│       └── package-lock.json
├── README.md
└── .vscode/
```

## Features

### Authentication
- Register a new account
- Log in with email and password
- Secure protected endpoints with JWT
- Fetch user information after authentication

### Resume Management
- Create new resumes
- View existing resumes from a dashboard
- Open a resume in an editor
- Update resume details
- Delete resumes when no longer needed
- View a resume preview in the application

### Resume Editing
- Build resumes using structured form fields
- Manage personal information, education, experience, skills, and other sections
- Reuse the editing flow for a smooth resume-building experience

### Media Uploads
- Upload profile or resume-related images
- Store uploaded files in the backend uploads directory
- Serve uploaded assets via a static route

### Dashboard Experience
- See a list of saved resumes
- Navigate quickly to edit or view specific resumes
- Generate a cleaner workflow for job applications

## Prerequisites

Before running the project, ensure you have:

- Node.js 18+ recommended
- npm
- MongoDB running locally or remotely
- A valid MongoDB connection URI

## Environment Variables

Create a `.env` file inside the `backend/` directory with the following values:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/resume-builder
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_super_secret_key
```

Notes:
- `MONGO_URI` is required for MongoDB connectivity
- `CLIENT_URL` is used for CORS configuration
- `JWT_SECRET` should be a strong secret used for signing authentication tokens

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/SSF7771/Resume-Builder.git
cd Resume-Builder
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

Start the backend:

```bash
npm start
```

For development mode with auto-reload:

```bash
npm run dev
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend/resume-builder
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend will typically run at:

```text
http://localhost:5173
```

The backend will typically run at:

```text
http://localhost:5000
```

## API Endpoints

The backend exposes REST endpoints under the `/api` base path.

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/getUser`

### Resume Management
- `POST /api/resume/create`
- `GET /api/resume/get`
- `GET /api/resume/:id`
- `PUT /api/resume/:id`
- `DELETE /api/resume/:id`

The exact routes may vary slightly depending on controller implementation, but the app is organized around authentication and resume CRUD operations.

## Backend Architecture

The backend is organized into the following main areas:

- `config/` — database connection setup
- `controllers/` — request handlers and business logic
- `middleware/` — auth and request protection logic
- `models/` — MongoDB data models
- `routes/` — API route definitions
- `uploads/` — uploaded assets and user files

## Frontend Architecture

The frontend is organized as follows:

- `src/pages/` — landing page, dashboard, and resume editor screens
- `src/components/` — reusable UI blocks and form sections
- `src/context/` — global application state
- `src/utils/` — utility functions and API helpers
- `src/App.jsx` — main application routing

## Usage Flow

1. Sign up or log in to the application
2. Open the dashboard
3. Create a new resume or edit an existing one
4. Fill in resume details
5. Save changes
6. Preview or print the resume as needed

## Notes

- Uploaded files are served through the backend `uploads` directory using a static route.
- The frontend uses a React Router-driven workflow for dashboard and resume editing pages.
- The app is designed to support a streamlined resume-building user flow for job applications.

## Common Troubleshooting

### MongoDB connection issues
- Check that MongoDB is running
- Verify the `MONGO_URI` in `backend/.env`
- Ensure the database is reachable from the backend

### Frontend cannot connect to backend
- Confirm the backend is running on port 5000
- Check the frontend API base URL in the Axios configuration
- Verify the backend CORS settings

### Authentication errors
- Confirm that `JWT_SECRET` is defined
- Ensure the token is attached to authenticated requests
- Check whether the user is logged in before accessing protected routes

## License

This project is currently licensed under the ISC license, as defined in the backend package configuration.

## Contributing

Contributions are welcome. If you would like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request with a clear summary

## Project Status

This project is a functional personal resume-building application with authentication, dashboard management, and resume editing capabilities.

## Contact

For questions or collaboration, please reach out through the repository owner or project maintainer.

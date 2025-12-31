# One-Look Profile - Next.js Version

A modern profile showcase platform built with Next.js 16, allowing users to create beautiful, visual profiles that stand out.

## Features

- **User Authentication**: Demo authentication with hardcoded credentials
- **Profile Creation & Editing**: Live editor with real-time preview
- **Profile Discovery**: Browse and search through featured profiles
- **Responsive Design**: Beautiful UI that works on all devices
- **No Database Required**: Uses mock data for demonstration

## Demo Credentials

The application comes with pre-configured demo users:

### Applicant Account
- **Username**: `applicant`
- **Password**: `password123`
- **Access**: Can create and edit profiles

### Recruiter Account
- **Username**: `recruiter`
- **Password**: `password123`
- **Access**: Can browse and view profiles

### Admin Account
- **Username**: `admin`
- **Password**: `admin123`
- **Access**: Can create and edit profiles (applicant role)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd nextjs-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Routes

- `/` - Home page (landing or profile discovery based on auth)
- `/login` - Login page
- `/register` - Registration page (demo only)
- `/create` - Profile creation/editing (requires applicant login)
- `/profile/[id]` - View individual profile
- `/help` - Help and information
- `/contact` - Contact page

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library
- **CSS Modules** - Scoped styling

## License

This is a demo project for educational purposes.

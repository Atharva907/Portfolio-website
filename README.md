
# Atharva Chavan Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- Modern UI/UX with smooth animations
- Dark/Light theme support
- Responsive design for all devices
- Built with Next.js 16, React 18, and Tailwind CSS
- Component-based architecture with ShadCN UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

   Or run the included install script:
   ```
   install.bat
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

### Local Build

To build the project for production:
```
npm run build
```

To start the production server:
```
npm start
```

### Vercel Deployment

This project uses the Next.js App Router, which requires the `app` directory to be at the project root.

Before deploying to Vercel, run the setup script:
```
setup-vercel.bat
```

This will copy all necessary files from `src/app` to the root `app` directory that Vercel expects.

Then you can deploy to Vercel:
1. Connect your repository to Vercel
2. Vercel will automatically detect it's a Next.js project
3. The build will run automatically

## Project Structure

```
src/
├── app/                  # Source files
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── ContactSection.jsx
│   ├── globals.css         # Global styles
│   ├── layout.jsx          # Root layout
│   └── page.jsx            # Home page
├── components/ui/          # ShadCN UI components
└── app/                   # Files for Vercel deployment (copied from src/app)
```

## Technologies Used

- Next.js 16
- React 18
- Tailwind CSS
- Framer Motion
- Next Themes
- Lucide React
- ShadCN UI

## License

© 2024 Atharva Chavan. All rights reserved.


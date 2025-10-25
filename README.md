
# Atharva Chavan Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Modern UI/UX with smooth animations
- Dark/Light theme support
- Responsive design for all devices
- Contact form with email notifications
- Project showcase with filtering
- Mobile-friendly navigation
- Built with Next.js 16, React 18, and Tailwind CSS
- Component-based architecture with ShadCN UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Resend API key

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

3. Set up environment variables
   ```
   cp .env.example .env.local
   ```

   Edit `.env.local` with your values:
   ```
   MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/dbname"
   RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxx"
   EMAIL_FROM="noreply@yourdomain.com"
   EMAIL_TO="your.email@example.com"
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

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
3. Add environment variables in Vercel dashboard
4. The build will run automatically

## Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── components/         # React components
│   ├── globals.css         # Global styles
│   ├── layout.jsx          # Root layout
│   └── page.jsx            # Home page
├── components/             # Reusable components
│   ├── ui/                # UI components
│   ├── AboutSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   └── ProjectsSection.jsx
├── lib/                   # Utility functions
│   └── mongodb.js         # Database connection
├── models/                 # Mongoose models
│   └── Message.js          # Contact form message model
├── public/                 # Static assets
├── docs/                  # Documentation
│   └── MONGODB_SETUP.md   # MongoDB setup guide
└── src/app/                # Source files (copied to root app/ for deployment)
```

## Technologies Used

- **Frontend**: Next.js 16, React 18, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Email**: Resend API
- **Deployment**: Vercel
- **UI Components**: ShadCN UI
- **Icons**: Lucide React

## Customization

### Personal Information

Update these files with your information:

1. `components/HeroSection.jsx` - Name and tagline
2. `components/AboutSection.jsx` - About text and skills
3. `components/ProjectsSection.jsx` - Project details
4. `components/ContactSection.jsx` - Contact information
5. `components/Footer.jsx` - Footer content

### Styling

The project uses Tailwind CSS with custom design tokens. Modify:

- `app/globals.css` - Global styles and CSS variables
- Component files - Component-specific styles

## MongoDB Setup

For detailed MongoDB setup instructions, see [docs/MONGODB_SETUP.md](docs/MONGODB_SETUP.md).

## License

MIT License - see LICENSE file for details.


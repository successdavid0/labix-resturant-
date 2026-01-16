# Labix Restaurant - Digital Platform

A comprehensive, app-like digital platform for Labix Restaurant featuring fine dining, artisanal pastries, and a gaming lounge experience.

## Features

- 🍽️ **Fine Dining Menu** - Browse our curated menu with search and filtering
- 🎂 **Custom Pastries** - Order personalized cakes and pastries
- 🎮 **Gaming Lounge** - Book gaming stations and join tournaments
- 📅 **Reservations** - Easy table booking system
- 🌙 **Dark Mode** - Beautiful light and dark themes
- 📱 **PWA Ready** - Install as an app on mobile devices
- ✨ **Modern UI** - Gold and white premium design system

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── dining/            # Dining menu page
│   ├── pastries/          # Pastries page
│   ├── gaming/            # Gaming lounge page
│   ├── reservations/      # Reservation page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # UI components (Button, Card, etc.)
│   ├── header.tsx         # Site header
│   ├── footer.tsx         # Site footer
│   └── mobile-nav.tsx     # Mobile bottom navigation
├── lib/                   # Utility functions
└── public/                # Static assets
```

## Design System

### Colors

**Light Mode:**
- Primary Gold: `#D4AF37`
- Secondary Gold: `#F4E4C1`
- Accent Gold: `#B8961E`
- White Base: `#FFFFFF`

**Dark Mode:**
- Background Primary: `#0D0D0D`
- Background Secondary: `#1A1A1A`
- Gold Primary: `#E0C158`

### Typography

- **Headings**: Playfair Display
- **Body**: Inter
- **Accent**: Cormorant Garamond
- **Monospace**: JetBrains Mono

## Features in Development

- [ ] User authentication
- [ ] Order management system
- [ ] Payment integration
- [ ] Loyalty rewards program
- [ ] AI-powered recommendations
- [ ] Custom pastry builder
- [ ] Real-time gaming lounge availability
- [ ] Admin dashboard

## License

© 2024 Labix Restaurant. All rights reserved.

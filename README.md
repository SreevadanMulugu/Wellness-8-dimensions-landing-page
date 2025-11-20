# 8 Dimensions of Wellness - Interactive Website

A modern, interactive, and engaging website dedicated to educating users about the 8 Dimensions of Wellness. Built with Next.js 14, React, Framer Motion, and Tailwind CSS.

## Features

- 🎨 **Beautiful UI/UX**: Modern, creative, and fun design with smooth animations
- 🎯 **Interactive Quiz**: Self-assessment tool to evaluate your wellness across all dimensions
- 📚 **Educational Content**: Comprehensive information about each dimension
- 🎭 **Animations**: Smooth transitions and engaging interactions using Framer Motion
- 📱 **Responsive Design**: Works perfectly on all devices
- 🖼️ **Stock Images**: High-quality images from Unsplash

## The 8 Dimensions

1. **Physical Wellness** - Maintaining a healthy body
2. **Emotional Wellness** - Understanding and managing emotions
3. **Intellectual Wellness** - Engaging in creative mental activities
4. **Social Wellness** - Building healthy relationships
5. **Spiritual Wellness** - Finding purpose and meaning
6. **Environmental Wellness** - Living in harmony with Earth
7. **Occupational Wellness** - Finding satisfaction in work
8. **Financial Wellness** - Managing resources effectively

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

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
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── DimensionsShowcase.tsx  # Main dimensions display
│   ├── DimensionCard.tsx   # Individual dimension card
│   ├── DimensionDetail.tsx # Detailed dimension view
│   ├── InteractiveQuiz.tsx # Wellness assessment quiz
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
└── package.json           # Dependencies
```

## Features in Detail

### Interactive Quiz
- 8 questions covering all dimensions
- Real-time progress tracking
- Personalized results with score breakdown
- Visual feedback and animations

### Dimension Cards
- Hover effects and animations
- Color-coded by dimension
- Quick overview of each dimension
- Click to view detailed information

### Detailed Views
- Comprehensive content for each dimension
- Key points and practical tips
- Beautiful imagery
- Smooth modal animations

## Customization

You can customize:
- Colors in `tailwind.config.js`
- Content in `components/DimensionsShowcase.tsx`
- Quiz questions in `components/InteractiveQuiz.tsx`
- Images (currently using Unsplash - replace with your own)

## License

This project is open source and available for use.

## Support

For questions or support, please contact info@8dimensionswellness.com

---

Built with ❤️ for holistic well-being


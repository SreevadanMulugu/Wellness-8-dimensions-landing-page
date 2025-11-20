# 🌟 8 Dimensions of Wellness - Interactive Platform

A beautiful, modern web application for exploring and improving your holistic wellness across eight key dimensions of life.

![Wellness App](https://img.shields.io/badge/version-2.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan)

## ✨ Features

### 🎯 Interactive Assessment
- Comprehensive 8-question wellness quiz
- Personalized results with dimension breakdown
- **Priority Queue System** - Focus on dimensions scoring ≤75%
- Beautiful, professional results dashboard
- No total score - individual dimension focus

### 📊 Professional Results Page
- Modern card-based layout with proper spacing
- Color-coded grades (A+, A, B, C, D)
- Animated progress bars
- Priority queue visualization
- Responsive design - no cut-off elements
- Smooth Framer Motion animations

### 🧭 8 Wellness Dimensions
1. **Physical** - Movement, nourishment, rest
2. **Emotional** - Feelings, stress management, resilience
3. **Intellectual** - Learning, creativity, curiosity
4. **Social** - Relationships, connections, community
5. **Spiritual** - Purpose, values, meaning
6. **Environmental** - Surroundings, nature, sustainability
7. **Occupational** - Work-life balance, career satisfaction
8. **Financial** - Money management, security, planning

### 🎨 Modern UI/UX
- Glassmorphism effects
- Gradient backgrounds with animated orbs
- Smooth page transitions
- Hover effects and micro-interactions
- Mobile-first responsive design
- Dark mode support (coming in V2.1)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd 8_dimensions_wellness

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
8_dimensions_wellness/
├── app/                    # Next.js 14 app directory
│   ├── dimension/[id]/    # Individual dimension pages
│   ├── result/            # Results dashboard page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── InteractiveQuiz.tsx
│   ├── DimensionProgressSlider.tsx
│   ├── Navigation.tsx
│   └── ...
├── data/                  # Static data
│   └── dimensions.ts      # Dimension content
├── lib/                   # Utilities
│   └── quizRouting.ts     # Quiz logic & priority queue
├── public/                # Static assets
│   └── doodles/          # SVG illustrations
└── contexts/              # React contexts
    └── ThemeContext.tsx   # Theme management
```

## 🎯 How It Works

### Priority Queue System

The app uses a FIFO (First In, First Out) priority queue to guide users through their wellness journey:

1. **Take the Quiz** - Answer 8 questions about your wellness
2. **Get Results** - See scores for all 8 dimensions
3. **Priority Queue** - Dimensions scoring ≤3 out of 4 (≤75%) are added to queue
4. **FIFO Order** - Queue sorted by lowest score first
5. **Guided Journey** - Navigate through dimensions in priority order

**Example:**
- Physical: 1/4 → Priority #1
- Social: 1/4 → Priority #2  
- Emotional: 2/4 → Priority #3
- Environmental: 3/4 → Priority #4
- Others: 4/4 → Not in queue

### Results Page Features

- **Dimension Breakdown** - All 8 dimensions with individual scores
- **Grade System** - A+, A, B, C, D with color coding
- **Progress Bars** - Animated fills showing percentage
- **Priority Sidebar** - Visual queue with numbered list
- **Start Journey** - Begin with lowest-scoring dimension
- **Quick Actions** - Return home, retake quiz

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📱 Responsive Design

- **Mobile**: Optimized for phones (375px+)
- **Tablet**: Enhanced layout (768px+)
- **Desktop**: Full features (1024px+)
- **Large Screens**: Maximum width containers (1920px+)

## 🎨 Design System

### Colors
- **Wellness Canopy**: `#1f5b4c` - Primary dark green
- **Wellness Fern**: `#2d8a70` - Medium green
- **Wellness Moss**: `#3fa87b` - Light green
- **Wellness Mist**: `#e5f0ed` - Very light green
- **Wellness Sun**: `#f4a261` - Accent orange
- **Wellness Dew**: `#a8dadc` - Accent blue

### Typography
- **Display**: Playfair Display (headings)
- **Body**: Inter (content)

## 🔄 Version History

### V2.0 (Current)
- ✅ Priority queue system for low-scoring dimensions
- ✅ Professional results dashboard
- ✅ Removed total score display
- ✅ Enhanced UI with proper spacing
- ✅ Responsive design improvements
- ✅ Smooth animations throughout

### V1.0
- Initial release
- 8-dimension quiz
- Basic results display
- Dimension detail pages
- Home page with hero section

## 🚧 Roadmap (V2.1+)

- [ ] 3D score visualizations
- [ ] Radar/spider charts
- [ ] Progress history tracking
- [ ] Personalized insights
- [ ] Shareable result cards
- [ ] Interactive dimension wheel
- [ ] Testimonials carousel
- [ ] Progress tracking system
- [ ] Weekly check-ins
- [ ] Milestone achievements
- [ ] Dark mode
- [ ] PWA support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern wellness platforms
- Icons by Lucide
- Illustrations from custom SVG doodles
- Color palette inspired by nature

## 📞 Support

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ for holistic wellness**

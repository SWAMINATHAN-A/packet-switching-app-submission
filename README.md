# Packet Switching App

## 🎯 Why NetSwitch?

Understanding how networks route data is crucial for computer science students and engineers. NetSwitch transforms abstract networking concepts into **tangible, interactive experiences**. Watch packets flow through dynamic mesh networks, observe circuit paths locking in dedicated lanes, and solve real-world networking problems with integrated calculators.

Whether you're preparing for network exams, building intuition about switching paradigms, or just curious about how the internet works—NetSwitch makes it click.

## ✨ Features

### Interactive Visualizations
- **Unified Simulator**: Toggle between packet and circuit switching modes without leaving the experience
- **Canvas-Based Animations**: Real-time, GPU-accelerated rendering of network flows and dedicated circuits
- **Dynamic Controls**: Adjust playback speed, packet sizes, call durations, and routing behavior on the fly
- **Visual Feedback**: Watch metrics update live—throughput, delay, packet loss, all in real-time

### Educational Content
- **Concept Atlas**: Side-by-side comparisons, deep-dive concept cards, formula references with real-world examples
- **Numerical Solvers**: Three specialized calculators—delay breakdown (transmission + propagation), SNR/Shannon capacity, effective throughput with loss
- **Tradeoff Analysis**: Understand the pros and cons of each switching model through interactive comparisons
- **Quick Facts**: Bite-sized reminders of key concepts you need to remember

### Modern, Polished UI
- **Cinematic Entry**: Smooth, motion-sensitive boot sequence that respects user accessibility preferences
- **Smart Navigation**: Navbar intelligently hides/reveals based on scroll direction
- **Smooth Animations**: Every interaction uses GPU-optimized transforms and opacity (no layout thrashing)
- **Dark Theme**: Easy on the eyes during long study sessions, with carefully chosen design tokens
- **Mobile-Responsive**: Works seamlessly on desktops, tablets, and phones

### Performance First
- **Vite Build**: Lightning-fast development and production builds with automatic code splitting
- **Optimized Canvas**: Isolated from React re-renders for smooth 60fps animations
- **Smart Bundling**: Only ship what you need—lazy load pages and components

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 with Hooks |
| **Routing** | React Router v6 |
| **Build** | Vite (5.1+) |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Styling** | CSS3 + CSS Custom Properties |
| **Graphics** | Vanilla Canvas API |

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ ([download](https://nodejs.org))
- **npm** (comes with Node.js)
- A modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

### Installation

```bash
# Clone the repository
git clone https://github.com/rakshit-737/packet-switching-app.git
cd packet-switching-app

# Install dependencies
npm install

# Start the development server (opens on http://localhost:5173)
npm run dev
```

### Building for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview

# Deploy to Vercel (recommended)
# Push to GitHub, connect in Vercel Dashboard, and deploy with one click
```

## 📂 Project Architecture

```
src/
├── components/
│   ├── BootSequence.jsx          # Animated entry overlay with accessibility
│   ├── CircuitCanvas.jsx         # Canvas renderer for circuit switching simulation
│   ├── PacketCanvas.jsx          # Canvas renderer for packet switching simulation
│   ├── Navbar.jsx                # Scroll-reactive navigation bar
│   ├── DelayCalculator.jsx       # Transmission + propagation delay solver
│   ├── SNRCalculator.jsx         # SNR & Shannon capacity calculator
│   └── ThroughputCalculator.jsx  # Effective throughput calculator
│
├── pages/
│   ├── Home.jsx                  # Landing page with hero & learning path
│   ├── Concepts.jsx              # Concept Atlas: tables, cards, formulas, facts
│   ├── Visualizer.jsx            # Unified packet/circuit switching simulator
│   └── Numericals.jsx            # Solver lab with tabbed interface
│
├── styles/
│   ├── Navbar.css
│   ├── Home.css
│   ├── DelayCalculator.css
│   ├── SNRCalculator.css
│   ├── ThroughputCalculator.css
│   └── pages/
│       ├── Concepts.css
│       ├── Numericals.css
│       └── Visualizer.css
│
├── utils/
│   ├── circuitVisualizer.js      # Circuit animation logic
│   ├── packetVisualizer.js       # Packet flow animation logic
│   └── formulas.js               # Network formulas & metadata
│
├── App.jsx                       # Root component with routing
├── main.jsx                      # React entry point
└── styles.css                    # Global design tokens & typography
```

## 📖 Pages & Routes

| Route | Purpose | Highlights |
|-------|---------|-----------|
| `/` | **Home** | Hero section, model comparison, learning path cards, feature overview |
| `/concepts` | **Concept Atlas** | Packet vs. circuit comparison, core concepts, formulas, quick facts |
| `/visualizer` | **Interactive Lab** | Real-time simulation—toggle between switching modes, adjust parameters, watch behavior |
| `/numericals` | **Solver Lab** | Three calculators: delay, SNR, throughput—with instant recompute and result breakdowns |

## 🎮 How to Use

### Visualizer
1. Navigate to `/visualizer`
2. Select your mode: **Packet Switching** (dynamic mesh, independent flows) or **Circuit Switching** (dedicated lanes, reserved capacity)
3. Adjust playback speed, packet size, and call duration
4. Hit play and watch the simulation—observe delays, throughput, and network behavior
5. Compare the two modes side-by-side

### Numericals
1. Head to `/numericals`
2. Choose a calculator from the tabs
3. Enter your parameters (link speed, distance, packet size, etc.)
4. Results update instantly—see detailed breakdowns for each calculation

### Learning Path
1. Start on the **Home** page to understand the big picture
2. Explore **Concept Atlas** to deepen your understanding
3. Use **Visualizer** to see concepts in action
4. Test your knowledge with **Numericals** solvers

## 🌐 Live Demo

Check it out live: **[packet-switching-app.vercel.app](https://packet-switching-app.vercel.app)**

Built and hosted on Vercel for instant, reliable deployment.

## 🔧 Development

### Available Commands
```bash
npm run dev      # Start hot-reload dev server
npm run build    # Production build
npm run preview  # Serve production build locally
```

### Code Style
- ES6+ JavaScript
- React Hooks (no class components)
- Functional CSS with CSS custom properties
- Canvas drawing encapsulated in utility functions

## 🤝 Contributing

We love contributions! Whether it's bug fixes, feature ideas, or UI improvements—feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

**Ideas for contributions:**
- Additional network calculators (bandwidth, latency, jitter, etc.)
- More simulation scenarios (congestion, packet loss behavior, network failover)
- Internationalization (i18n) support
- Dark/light theme toggle
- Export simulation results as reports

## 📚 Learning Resources

New to packet/circuit switching? Check out:
- **Concept Atlas** in the app for quick primers
- [Computer Networking: A Top-Down Approach](https://www.pearsonhighered.com/program/Kurose-Computer-Networking-8th-Edition/PGM1880571.html) by Kurose & Ross
- [RFC 3031](https://tools.ietf.org/html/rfc3031) — Multiprotocol Label Switching Architecture

## 📋 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome/Chromium | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |

## 📄 License

MIT License — See LICENSE file for details. Feel free to use this project for educational purposes.

## 🙏 Acknowledgments

Built with ❤️ for students, engineers, and anyone curious about how networks really work.

Special thanks to everyone learning computer networks—your questions and curiosity inspire better tools.

---

**Have questions or found a bug?** [Open an issue](https://github.com/rakshit-737/packet-switching-app/issues) on GitHub. We're here to help![rakshit-737](https://github.com/rakshit-737)

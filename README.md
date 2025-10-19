# 🎯 Word MasterMind

<div align="center">

![Word MasterMind Logo](https://img.shields.io/badge/🎮_Word_MasterMind-Play_Now-brightgreen?style=for-the-badge&logo=gamepad)

[![Node.js](https://img.shields.io/badge/Node.js-16.20.2-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Fastify](https://img.shields.io/badge/Fastify-5.0-blue?style=flat-square&logo=fastify)](https://www.fastify.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployable-000000?style=flat-square&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

### 🚀 The Ultimate Wordle Clone - Play Endlessly!

*Experience the addictive word-guessing game without daily limits. Multiple languages supported!*

[🎮 Play Now](#-quick-start) • [🐳 Docker](#-docker-deployment) • [☁️ Deploy](#-vercel-deployment) • [🛠️ Development](#-development)

</div>

---

## ✨ Features

🎯 **Unlimited Gameplay** - No daily word restrictions
🌍 **Multi-Language Support** - English, Dutch, Romanian, Swedish
🎨 **Beautiful UI** - Clean, responsive design
⚡ **Fast Performance** - Built with Fastify
🐳 **Docker Ready** - Easy deployment
☁️ **Vercel Compatible** - One-click cloud deployment
🔒 **Secure** - Production-ready configuration

## 🎮 How to Play

🎯 **Goal**: Guess the target word in limited attempts

### Feedback System:
- 🟢 **Green**: Correct letter in correct position
- 🟡 **Yellow**: Correct letter in wrong position  
- ⬜ **Gray**: Letter not in the word

### Game Rules:
- All guesses must be valid dictionary words
- Use the on-screen keyboard for hints
- Multiple difficulty levels available

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16.20.2 or higher
- npm or yarn package manager

### 1️⃣ Clone & Install
```bash
git clone <your-repo-url>
cd Word-MasterMind-Main
npm install
```

### 2️⃣ Run Locally
```bash
npm start
```

### 3️⃣ Open Browser
```
🌐 http://localhost:3000
```

---

## 🐳 Docker Deployment

### Quick Docker Run
```bash
# Build and run with Docker Compose (Recommended)
docker-compose up --build

# Or build manually
docker build -t word-mastermind .
docker run -p 3000:3000 word-mastermind
```

### Production Docker
```bash
# Run in background
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop application
docker-compose down
```

**🔗 Access**: http://localhost:3000

---

## ☁️ Vercel Deployment

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Option 3: GitHub Integration
1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploy on every push! 🚀

---

## 🛠️ Development

### Project Structure
```
📦 Word-MasterMind-Main/
├── 📁 src/
│   ├── 🎯 server.js      # Main server file
│   ├── 🎮 game.js        # Game logic
│   ├── 📚 dictionary.js  # Dictionary management
│   └── 🧪 *.spec.js      # Test files
├── 📁 public/
│   ├── 🏠 index.html     # Main HTML
│   ├── 🎨 style.css      # Styles
│   └── ⚡ client-app.js  # Frontend logic
├── 📁 dict/              # Dictionary files
├── 🐳 Dockerfile         # Docker configuration
├── 🔧 docker-compose.yml # Docker Compose
├── ☁️ vercel.json       # Vercel configuration
└── 📦 package.json       # Dependencies
```

### Available Scripts
```bash
npm start      # Start production server
npm run dev    # Start development server
npm test       # Run tests
npm run build  # Build for production
```

### Environment Variables
```bash
PORT=3000              # Server port
NODE_ENV=production    # Environment
TOTAL_ATTEMPTS=7       # Max attempts per game
```

---

## 🌍 Multi-Language Support

| Language | Code | Dictionary |
|----------|------|------------|
| 🇺🇸 English | `en-us-5` | 5-letter words |
| 🇳🇱 Dutch | `nl-nl-5` | 5-letter words |
| 🇷🇴 Romanian | `ro-ro-5` | 5-letter words |
| 🇷🇴 Romanian | `ro-ro-6` | 6-letter words |
| 🇸🇪 Swedish | `sv-se-5` | 5-letter words |

---

## 🔧 API Endpoints

### Health Check
```http
GET /api
```

### Start Game
```http
POST /api/game/start
Content-Type: application/json

{
  "dictName": "en-us-5"
}
```

### Submit Guess
```http
POST /api/game/submit
Content-Type: application/json

{
  "id": "game_id",
  "guess": "HELLO"
}
```

---

## 🚀 Performance & Security

✅ **Production Ready**
- Non-root Docker user
- Health checks included
- Optimized build layers
- Security headers

✅ **Performance Optimized**
- Fast Fastify server
- Efficient caching
- Minimal dependencies
- Docker multi-stage builds

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create feature branch (`git checkout -b feature/amazing-feature`)
3. 📝 Commit changes (`git commit -m 'Add amazing feature'`)
4. 🚀 Push to branch (`git push origin feature/amazing-feature`)
5. 🎯 Open Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Original [Wordle](https://www.powerlanguage.co.uk/wordle/) game inspiration
- [MasterMind](https://en.wikipedia.org/wiki/Mastermind_(board_game)) game concept
- Community dictionary contributors

---

<div align="center">

### 🎯 Ready to Play? Let's Go!

[![Play Now](https://img.shields.io/badge/🎮_Play_Now-Start_Game-success?style=for-the-badge)](http://localhost:3000)

**Made with ❤️ for word game enthusiasts**

</div>

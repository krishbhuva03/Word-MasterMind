<div align="center">

# 🎯 WORD MASTERMIND

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&duration=2800&pause=1000&color=36BCF7&center=true&vCenter=true&width=600&lines=The+Ultimate+Wordle+Experience;Play+Without+Limits;Guess+Without+Boundaries;Deploy+Anywhere+in+Seconds" alt="Typing SVG" />

[![Node.js](https://img.shields.io/badge/Node.js-16.20.2+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Fastify](https://img.shields.io/badge/Fastify-4.x-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://www.fastify.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

[🎮 **PLAY NOW**](#-quick-start) • [🐳 **DOCKER**](#-docker-deployment) • [☁️ **DEPLOY**](#️-vercel-deployment) • [🛠️ **DEVELOP**](#️-development)

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="700">

</div>

## 🌟 Why Word MasterMind?

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="1000">
</div>

<table>
<tr>
<td width="50%">

### 🎯 **Unlimited Gameplay**
Break free from daily limits. Play as many games as your brain can handle. No restrictions, no waiting.

### 🌍 **Global Dictionary**
Powered by multi-language dictionaries. English, Dutch, Romanian, Swedish — more coming soon.

### ⚡ **Lightning Fast**
Built on Fastify, one of the fastest Node.js frameworks. Experience millisecond response times.

</td>
<td width="50%">

### 🎨 **Beautiful Interface**
Sleek, modern design that feels native on any device. Responsive and intuitive.

### 🐳 **Deploy Anywhere**
Docker-ready, Vercel-compatible, cloud-native. From localhost to production in minutes.

### 🔒 **Production Grade**
Security headers, health checks, optimized builds. Enterprise-ready from day one.

</td>
</tr>
</table>

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="1000">
</div>

---

## 📢 Advertising & Monetization

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" width="100">
</div>

**Word MasterMind features Google AdSense integration** to support the development and hosting costs while keeping the game **completely free** for all users.

### 🎯 **Ad Placement Strategy**
- **📱 Mobile-Friendly**: No ads on mobile devices - pure gaming experience
- **💻 Desktop Sidebar**: Non-intrusive vertical ads on left and right sides (screens > 1200px)
- **📄 Below-the-fold**: Additional content at the bottom for users who scroll down
- **🎮 Game-First**: Main gameplay area is always clean and distraction-free

### ✅ **Google Approved**
- All ads are served through **Google AdSense**
- Content complies with Google's advertising policies
- Safe, family-friendly advertisements only
- Responsive ad formats that adapt to different screen sizes

<div align="center">

*Playing Word MasterMind is free forever. Ads help keep the servers running!*

</div>

---

## 🎮 Game Rules

```
🎯 MISSION: Decode the hidden word in 7 attempts or less

📊 FEEDBACK SYSTEM:
   🟢 Green  → Right letter, right spot (Locked in!)
   🟡 Yellow → Right letter, wrong spot (Close!)
   ⬜ Gray   → Letter not in word (Eliminate it)

✅ REQUIREMENTS:
   • All guesses must be valid dictionary words
   • Use the smart keyboard for instant hints
   • Track your progress with the attempt counter
```

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">
</div>

---

## 🚀 Quick Start

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257472-08e52665-c503-4bd9-aa20-f5a4dae769b5.gif" width="100">
</div>

Get up and running in **under 60 seconds**:

### Prerequisites
- Node.js `16.20.2` or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Word-MasterMind-Main

# Install dependencies
npm install

# Launch the game
npm start
```

### 🎉 That's It!

Open your browser and navigate to:
```
🌐 http://localhost:3000
```

<div align="center">

**Welcome to infinite word-guessing bliss.**

<img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.gif" width="30" alt="Fire">
<img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.gif" width="30" alt="Fire">
<img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.gif" width="30" alt="Fire">

</div>

---

## 🐳 Docker Deployment

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" width="100">
<img src="https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif" width="100">
<img src="https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif" width="100">
</div>

### Quick Launch with Docker Compose

```bash
# Build and run (includes automatic restart)
docker-compose up --build

# Run in background
docker-compose up -d --build

# View live logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Manual Docker Build

```bash
# Build the image
docker build -t word-mastermind .

# Run the container
docker run -p 3000:3000 word-mastermind
```

**Access at:** `http://localhost:3000`

---

## ☁️ Vercel Deployment

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="100">
</div>

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

*Click, connect, deploy. Done.*

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Option 3: GitHub Integration

1. Push your code to GitHub
2. Import repository in Vercel dashboard
3. Hit deploy
4. **Automatic deployments** on every push 🚀

---

## 🛠️ Development

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif" width="100">
<img src="https://user-images.githubusercontent.com/74038190/212257463-4d082cb4-7483-4eaf-bc25-6dde2628aabd.gif" width="100">
<img src="https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif" width="100">
</div>

### Project Architecture

```
📦 Word-MasterMind-Main/
│
├── 📁 src/
│   ├── 🎯 server.js         # Fastify server & routes
│   ├── 🎮 game.js           # Core game engine
│   ├── 📚 dictionary.js     # Dictionary loader
│   └── 🧪 *.spec.js         # Unit tests
│
├── 📁 public/
│   ├── 🏠 index.html        # Game interface
│   ├── 🎨 style.css         # Beautiful styling
│   └── ⚡ client-app.js     # Frontend logic
│
├── 📁 dict/                 # Language dictionaries
├── 🐳 Dockerfile            # Container config
├── 🔧 docker-compose.yml    # Orchestration
├── ☁️ vercel.json          # Vercel config
└── 📦 package.json          # Dependencies
```

### Available Commands

```bash
npm start       # 🚀 Start production server
npm run dev     # 🔥 Development mode with hot reload
npm test        # 🧪 Run test suite
npm run build   # 📦 Build for production
```

### Environment Configuration

Create a `.env` file:

```env
PORT=3000                    # Server port
NODE_ENV=production          # Environment mode
TOTAL_ATTEMPTS=7            # Max guesses per game
```

---

## 🔌 API Reference

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" width="100">
</div>

### Health Check
```http
GET /api
```
Returns server status and health metrics.

### Start New Game
```http
POST /api/game/start
Content-Type: application/json

{
  "dictName": "en-us-5"
}
```

**Response:**
```json
{
  "id": "game_abc123",
  "wordLength": 5,
  "attemptsLeft": 7
}
```

### Submit Guess
```http
POST /api/game/submit
Content-Type: application/json

{
  "id": "game_abc123",
  "guess": "HELLO"
}
```

**Response:**
```json
{
  "result": [
    {"letter": "H", "status": "correct"},
    {"letter": "E", "status": "present"},
    {"letter": "L", "status": "absent"},
    {"letter": "L", "status": "absent"},
    {"letter": "O", "status": "correct"}
  ],
  "gameOver": false,
  "won": false
}
```

---

## ⚡ Performance & Security

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212257472-08e52665-c503-4bd9-aa20-f5a4dae769b5.gif" width="100">
</div>

<table>
<tr>
<td width="50%">

### 🔒 **Security Features**
- ✅ Non-root Docker user
- ✅ Security headers enabled
- ✅ Input validation & sanitization
- ✅ Rate limiting ready
- ✅ CORS protection

</td>
<td width="50%">

### 🚀 **Performance**
- ✅ Fastify's lightning speed
- ✅ Efficient caching strategies
- ✅ Minimal dependency footprint
- ✅ Docker multi-stage builds
- ✅ CDN-ready static assets

</td>
</tr>
</table>

---

## 🤝 Contributing

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="100">
</div>

We love contributions! Here's how to get involved:

1. **🍴 Fork** the repository
2. **🌿 Create** your feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **📝 Commit** your changes
   ```bash
   git commit -m 'Add: amazing feature that does X'
   ```
4. **🚀 Push** to your branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **🎯 Open** a Pull Request

### Contribution Guidelines
- Write clean, documented code
- Add tests for new features
- Update README if needed
- Follow existing code style

---

## 📄 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for full details.

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="400">
</div>

---

## 🙏 Credits

**Inspired by:**
- The original Wordle phenomenon
- Classic MasterMind board game
- Open-source dictionary projects

**Built with love by word game enthusiasts, for word game enthusiasts.**

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.gif" width="30" alt="Fire">
<img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.gif" width="30" alt="Fire">
<img src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.gif" width="30" alt="Fire">
</div>

---

<div align="center">

## 🎯 Ready to Master Words?

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=F7B93E&center=true&vCenter=true&width=435&lines=Stop+Reading.+Start+Playing!;Deploy+in+60+Seconds!;Unlimited+Word+Puzzles+Await!" alt="Typing SVG" />

[🎮 **LAUNCH GAME**](#-quick-start) • [⭐ **STAR THIS REPO**](../../stargazers) • [🐛 **REPORT BUG**](../../issues)

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="700">

**Made with 💚 and ⚡ for the word game community**

[![GitHub Stars](https://img.shields.io/github/stars/yourusername/word-mastermind?style=social)](../../stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/yourusername/word-mastermind?style=social)](../../network/members)
[![GitHub Watchers](https://img.shields.io/github/watchers/yourusername/word-mastermind?style=social)](../../watchers)

*If you enjoy Word MasterMind, give us a ⭐ on GitHub!*

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" width="100%">

</div>
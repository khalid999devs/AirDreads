# 🌍 AirDreads - NASA Space Apps Challenge 2025

> **Where Every Move Saves a Breath** - Turning invisible air threats visible through gamification

## 🏗️ Project Structure

```
airdreads/
├── apps/
│   └── webapp/        # Next.js 15 frontend with App Router
├── packages/
│   ├── db/            # Database package with Prisma
│   ├── eslint-config/ # Shared ESLint configuration
│   ├── typescript-config/ # Shared TypeScript configuration
│   └── ui/            # Shared UI components
├── services/
│   ├── api/           # Node.js Express API service
│   └── flask/         # Python Flask service with ML capabilities
└── scripts/           # Development automation scripts
```

## 🚀 Development Workflow (Latest)

### One-Command Setup ⚡

```bash
# Clone and setup everything
git clone https://github.com/khalid999devs/AirDreads.git
cd AirDreads
pnpm run setup          # Installs dependencies + checks prerequisites

# Start development servers with HOT RELOAD
pnpm run dev:servers    # Flask (8081) + Express (8080) with watch mode
pnpm run dev:webapp     # Next.js (3000) in separate terminal
```

### Development Commands

```bash
pnpm run dev:servers      # Start both APIs with hot reload
pnpm run dev:servers:stop # Stop all development servers
pnpm run dev:webapp       # Start Next.js frontend
pnpm run check-setup      # Verify everything is configured
pnpm run reset            # Nuclear reset + fresh install
pnpm run test:hooks       # Test git hooks functionality
```

### Service URLs

- **Flask API**: http://localhost:8081 (Python ML service)
- **Express API**: http://localhost:8080 (Node.js service)
- **Next.js App**: http://localhost:3000 (Frontend webapp)

## 🔥 Hot Reload Development

### Features

- ✅ **Flask**: Auto-restart on `.py` file changes
- ✅ **Express**: Auto-restart on `.ts` file changes with `tsx watch`
- ✅ **Docker Volume Mounting**: No container rebuilds needed
- ✅ **Next.js**: Standard hot reload for frontend

### Docker Configuration

- `docker-compose.dev.yml` - Development containers with volume mounting
- `services/*/Dockerfile.dev` - Development-optimized Dockerfiles
- Python virtual environment preserved in containers

## 🔒 Production-Grade Code Quality

### Git Hooks with Husky + lint-staged

- ✅ **Pre-commit hooks** run automatically on `git commit`
- ✅ **Prettier formatting** for TypeScript/JavaScript files
- ✅ **Config file formatting** (JSON, Markdown, YAML)
- ✅ **Commit message validation** (non-empty commits)
- ✅ **Zero bad code** reaches the repository

### Lint-staged Configuration

```json
{
  "apps/**/*.{js,jsx,ts,tsx}": ["prettier --write"],
  "packages/**/*.{js,jsx,ts,tsx}": ["prettier --write"],
  "services/**/*.{js,ts}": ["prettier --write"],
  "*.{json,md,yml,yaml}": ["prettier --write"]
}
```

## 🎨 Frontend Features (Next.js 15)

### Theme System

- ✅ **Dark/Light mode** with Tailwind CSS v4
- ✅ **Custom CSS variables** for comprehensive theming
- ✅ **Theme persistence** with localStorage
- ✅ **Smooth transitions** between themes

### Internationalization

- ✅ **English/Bangla** language support
- ✅ **Translation system** with context providers
- ✅ **Language toggle** component
- ✅ **Locale-aware** content rendering

### Application Routes

- `/` - Landing page with "See AppConfigs" button
- `/test` - Comprehensive API testing interface
- `/dashboard` - User dashboard with stats
- `/challenges` - Gamified air quality challenges
- `/leaderboard` - Community rankings
- `/about` - Project information

### API Testing Interface

- ✅ **Next.js API route** testing (`/api/test`)
- ✅ **Express server** connectivity test (port 8080)
- ✅ **Flask server** dual endpoint testing (port 8081)
- ✅ **Real-time status** indicators
- ✅ **Error handling** with user feedback

## 🐍 Python Environment Setup

### Virtual Environment Management

- ✅ **uv package manager** for fast Python dependency management
- ✅ **Virtual environment** at `services/flask/.venv`
- ✅ **VS Code integration** with automatic interpreter detection
- ✅ **flask-cors** for cross-origin requests

### VS Code Configuration

```json
{
  "python.defaultInterpreterPath": "./services/flask/.venv/bin/python",
  "python.analysis.extraPaths": [
    "./services/flask/.venv/lib/python3.*/site-packages"
  ]
}
```

## 📁 Script Automation

### Available Scripts

```bash
scripts/
├── setup.sh              # First-time project setup
├── dev-servers.sh         # Start development servers
├── stop-dev-servers.sh    # Stop development servers
├── reset.sh              # Nuclear workspace reset
├── check-prerequisites.sh # Verify system requirements
└── test-git-hooks.sh     # Demonstrate git hook functionality
```

### Script Features

- ✅ **Prerequisite checking** (Docker, Node.js, pnpm)
- ✅ **Automatic installation** of missing tools
- ✅ **Clean error messages** with actionable guidance
- ✅ **Cross-platform compatibility** for macOS/Linux

## 🌐 Production Deployment

### Google Cloud Run (Live)

- **Flask Service**: https://flask-262907936819.asia-southeast1.run.app/health
- **API Service**: https://api-262907936819.asia-southeast1.run.app/health
- **Status**: ✅ All services operational

### Deployment Commands

#### Flask Service Deployment

```bash
# Build Flask Docker image for production (AMD64 for Cloud Run)
docker build --platform linux/amd64 -t asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1 ./services/flask
docker push asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1

# Deploy Flask to Cloud Run
gcloud run deploy flask --image=asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1 --region=asia-southeast1 --allow-unauthenticated
```

#### Express API Service Deployment

```bash
# Build Express Docker image for production (AMD64 for Cloud Run)
docker build --platform linux/amd64 -t asia-southeast1-docker.pkg.dev/airdreads/app-repo/api:v1 ./services/api
docker push asia-southeast1-docker.pkg.dev/airdreads/app-repo/api:v1

# Deploy Express API to Cloud Run
gcloud run deploy api --image=asia-southeast1-docker.pkg.dev/airdreads/app-repo/api:v1 --region=asia-southeast1 --allow-unauthenticated
```

#### Quick Redeploy Commands

```bash
# Flask service redeploy
cd services/flask
docker build --platform linux/amd64 -t asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1 .
docker push asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1
gcloud run deploy flask --image=asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1 --region=asia-southeast1 --allow-unauthenticated

# Express API redeploy
cd services/api
docker build --platform linux/amd64 -t asia-southeast1-docker.pkg.dev/airdreads/app-repo/api:v1 .
docker push asia-southeast1-docker.pkg.dev/airdreads/app-repo/api:v1
gcloud run deploy api --image=asia-southeast1-docker.pkg.dev/airdreads/app-repo/api:v1 --region=asia-southeast1 --allow-unauthenticated
```

### Vercel Frontend Deployment

- ✅ **Automatic deployment** from GitHub pushes
- ✅ **Monorepo support** with shared packages
- ✅ **Root directory**: `apps/webapp`
- ✅ **Environment variables** for API endpoints

## 🔧 Technical Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **Tailwind CSS v4** - Utility-first styling with custom theme
- **TypeScript** - Type-safe development
- **React 19** - Latest React features

### Backend Services

- **Flask** - Python web framework with flask-cors
- **Express.js** - Node.js web framework
- **Docker** - Containerization for development and production
- **pnpm** - Fast package manager for monorepo

### Development Tools

- **Husky** - Git hooks management
- **lint-staged** - Run linters on staged files
- **Prettier** - Code formatting
- **ESLint** - Code quality checks
- **Turbo** - Monorepo build system

## 🎯 Development Best Practices

### Code Quality

- ✅ **Zero warnings** policy with ESLint
- ✅ **Consistent formatting** with Prettier
- ✅ **Type safety** with TypeScript
- ✅ **Pre-commit validation** prevents bad commits

### Development Experience

- ✅ **Hot reload** for all services
- ✅ **One-command setup** for new developers
- ✅ **Comprehensive error handling** with clear messages
- ✅ **Docker isolation** prevents environment conflicts

### Project Organization

- ✅ **Monorepo structure** with shared packages
- ✅ **Consistent naming** conventions
- ✅ **Modular architecture** for scalability
- ✅ **Documentation-driven** development

## 🚀 Quick Start for New Developers

```bash
# 1. Clone repository
git clone https://github.com/khalid999devs/AirDreads.git
cd AirDreads

# 2. One-command setup
pnpm run setup

# 3. Start development
pnpm run dev:servers    # APIs with hot reload
pnpm run dev:webapp     # Frontend (separate terminal)

# 4. Access applications
# Frontend: http://localhost:3000
# Express API: http://localhost:8080
# Flask API: http://localhost:8081
```

**That's it!** 🎉 Full development environment ready in under 2 minutes.

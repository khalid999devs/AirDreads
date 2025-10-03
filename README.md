# AirDreads - Where Every Move Saves a Breath

[![NASA Space Apps Challenge 2025](https://img.shields.io/badge/NASA%20Space%20Apps-2025-blue.svg)](https://www.spaceappschallenge.org/)
[![Team NebXplorers](https://img.shields.io/badge/Team-NebXplorers-purple.svg)](#team-nebxplorers)
[![Live Demo](https://img.shields.io/badge/Demo-Live-green.svg)](#live-demo)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](#license)

**By Team NebXplorers**

> **Transforming invisible air threats into visible, interactive, and actionable experiences** - A revolutionary platform that combines NASA air quality data, AI, augmented reality, and gamification to empower users to understand, monitor, and improve the air they breathe.

## Table of Contentsds - Where Every Move Saves a ## App Features

### Gamified Mode

- **Live Skymap**: Visualizes your city's air quality with real NASA forecasts. Swipe to find the cleanest hours
- **Missions & Hotspots**: Tap hotspots to complete missions; guides like Vent Wizard and Mask Master suggest actions to protect health
- **AR Mode**: Invisible pollutants appear in your camera view; defeat them with proper actions
- **Rewards & XP**: Earn XP, clear zones, and track knowledge growth
- **Profile & Progress**: Track health, knowledge, and leaderboard rankings

### Professional Mode

- **Advanced Dashboard**: Data-rich visuals and metrics for research and planning
- **3D Earth View**: Explore global air quality trends, past and present
- **Research Mode (Quest Box)**: Contribute to scientific research while completing missions
- **Targeted Dashboards**: Custom views for emergency responders and city planners, including an SOS button for emergency alerts

### Data & Forecastingace Apps Challenge 2025](https://img.shields.io/badge/NASA%20Space%20Apps-2025-blue.svg)](https://www.spaceappschallenge.org/)

[![Team NebXplorers](https://img.shields.io/badge/Team-NebXplorers-purple.svg)](#team-nebxplorers)
[![Live Demo](https://img.shields.io/badge/Demo-Live-green.svg)](#live-demo)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](#license)

**By Team NebXplorers**

> **Transforming invisible air threats into visible, interactive, and actionable experiences** - A revolutionary platform that combines NASA air quality data, AI, augmented reality, and gamification to empower users to understand, monitor, and improve the air they breathe.

## � Table of Contents

- [Project at a Glance](#project-at-a-glance)
- [The Problem](#the-problem)
- [Our Solution](#our-solution)
- [App Features](#app-features)
- [Technical Architecture](#technical-architecture)
- [AI & Machine Learning](#ai--machine-learning)
- [Quick Start](#quick-start)
- [Live Demo](#live-demo)
- [Impact & Benefits](#impact--benefits)
- [Future Roadmap](#future-roadmap)
- [Team NebXplorers](#team-nebxplorers)
- [License](#license)

## Project at a Glance

AirDreads is a revolutionary platform that transforms invisible air threats into a visible, interactive, and actionable experience. By combining NASA air quality data, AI, augmented reality, and gamification, AirDreads empowers users to understand, monitor, and improve the air they breathe, making environmental health engaging and life-saving.

## The Problem

### From EarthData to Action: Cloud Computing with Earth Observation Data for Predicting Cleaner, Safer Skies

Every breath we take carries risk. According to the World Health Organization, **air pollution causes over 7 million deaths annually**. Invisible pollutants like ozone, fine particulate matter (PM2.5/PM10), and toxic gases affect millions silently.

While NASA satellites (e.g., **TEMPO, MERRA-2**) monitor pollutants, aerosols, and fires hourly, this data remains largely inaccessible to the public. The result is an **information gap** - people are unaware of the risks and cannot take timely preventive action.

## Our Solution

AirDreads bridges the gap between NASA's environmental data and the people who need it most. It transforms complex datasets into interactive dashboards, gamified missions, and AR experiences, making air quality monitoring **educational, actionable, and fun**.

## 🚀 App Features

### 🎯 Gamified Mode

- **Live Skymap**: Visualizes your city's air quality with real NASA forecasts. Swipe to find the cleanest hours
- **Missions & Hotspots**: Tap hotspots to complete missions; guides like Vent Wizard and Mask Master suggest actions to protect health
- **AR Mode**: Invisible pollutants appear in your camera view; defeat them with proper actions
- **Rewards & XP**: Earn XP, clear zones, and track knowledge growth
- **Profile & Progress**: Track health, knowledge, and leaderboard rankings

### � Professional Mode

- **Advanced Dashboard**: Data-rich visuals and metrics for research and planning
- **3D Earth View**: Explore global air quality trends, past and present
- **Research Mode (Quest Box)**: Contribute to scientific research while completing missions
- **Targeted Dashboards**: Custom views for emergency responders and city planners, including an SOS button for emergency alerts

### 📊 Data & Forecasting

- **Algorithm & Expert Model**: Fine-tuned AI integrates NASA TEMPO and MERRA-2 data
- **Air Quality Calculation**: Computes AQI using satellite and ground data
- **Predictive Modeling**: Forecasts near-term and long-term air quality
- **Personalized Recommendations**: Adjusted dynamically based on location and user actions

## Quick Start

### One-Command Setup

```bash
# Clone the repository
git clone https://github.com/khalid999devs/AirDreads.git
cd AirDreads

# First-time setup (installs everything you need)
pnpm run setup

# Start all development servers with hot reload
pnpm run dev:servers
```

**That's it!** The setup script will:

- Check prerequisites (Docker, Node.js, pnpm)
- Install all dependencies automatically
- Guide you through any missing requirements

### Development Servers

- **Flask API**: http://localhost:8081 (with hot reload)
- **Express API**: http://localhost:8080 (with hot reload)
- **Next.js App**: `pnpm run dev:webapp` (separate terminal)

### Other Commands

```bash
# Stop all servers
pnpm run dev:servers:stop

# Check if everything is set up correctly
pnpm run check-setup

# Complete workspace reset (clean & reinstall everything)
pnpm run reset

# Format code
pnpm run format
```

### Production-Grade Safety

**Pre-commit hooks automatically run on every commit:**

- **ESLint** - Code quality checks with `--max-warnings=0`
- **Prettier** - Auto-format TypeScript, JavaScript, JSON, Markdown
- **Python Linting** - Flake8 checks for Python files
- **Commit Message Validation** - Ensures non-empty commit messages

**No bad code reaches the repository!**

### Prerequisites (Auto-checked)

- **Docker Desktop** - For containerized development
- **Node.js 18+** - For running the frontend and scripts
- **pnpm** - Package manager (auto-installed if missing)

## Technical Architecture

### Frontend

- **Next.js 15**: Modern React framework with server-side rendering
- **Vercel Deployment**: Global CDN for fast delivery worldwide
- **Shared UI Components & TypeScript**: Ensures design consistency and type-safe development
- **Responsive Design**: Optimized for desktop, tablet, and mobile experiences

### Backend

- **Express API**: RESTful service for app interface (Google Cloud Run)
- **Python Flask**: ML and AI processing engine (Google Cloud Run)
- **Prisma ORM**: Modern database management and type-safe queries
- **NASA Data Integration**: Real-time TEMPO & MERRA-2 satellite data processing

### Infrastructure

- **Google Cloud Run**: Scalable containerized services with auto-scaling
- **Docker**: Ensures consistent deployments across environments
- **Monorepo Architecture**: Organized codebase with shared packages and utilities
- **CI/CD Pipeline**: Automated testing, building, and deployment

## Live Demo

### Production Services

- **Frontend**: [Coming Soon - Vercel Deployment]
- **API Service**: https://api-262907936819.asia-southeast1.run.app/health
- **ML Service**: https://flask-262907936819.asia-southeast1.run.app/health

### Prerequisites

- Node.js 18+
- pnpm (recommended)
- Docker Desktop
- Google Cloud CLI (for deployment)

### Local Development

```bash
# Clone and install
git clone https://github.com/khalid999devs/AirDreads.git
cd AirDreads
pnpm install

# Run frontend
pnpm --filter web dev
# Visit: http://localhost:3000

# Run backend services
docker build -f services/api/Dockerfile -t api:dev . && docker run --rm -p 8080:8080 api:dev &
docker build -t flask:dev ./services/flask && docker run --rm -p 8081:8080 flask:dev &

# Test services
curl http://localhost:8080/health  # API
curl http://localhost:8081/health  # Flask ML service
```

## 📊 Project Structure

```
airdreads/
├── apps/
│   └── web/           # Next.js frontend (Vercel)
├── packages/
│   ├── db/            # Prisma database schema
│   ├── eslint-config/ # Shared linting rules
│   ├── typescript-config/ # Shared TS config
│   └── ui/            # Shared React components
└── services/
    ├── api/           # Express API (Google Cloud Run)
    └── flask/         # Python ML service (Google Cloud Run)
```

## AI & Machine Learning

Our sophisticated AI system powers AirDreads' intelligence through:

### NASA Data Processing

- **TEMPO & MERRA-2 Integration**: Real-time satellite data processing and analysis
- **Multi-source Data Fusion**: Combining satellite, ground station, and weather data

### Air Quality Calculation

- **Real-time AQI Computation**: Advanced algorithms for accurate air quality indexing
- **Pollutant-specific Analysis**: Individual tracking of PM2.5, PM10, ozone, NO2, and other pollutants

### Predictive Modeling

- **Short-term Forecasting**: Hour-by-hour air quality predictions
- **Long-term Trends**: Weekly and monthly air quality forecasting
- **Weather Integration**: Incorporating meteorological data for enhanced accuracy

### Personalized Recommendations

- **ML-driven Health Guidance**: Customized advice based on user profiles and health conditions
- **Dynamic Location Awareness**: Real-time recommendations based on user location and movement patterns
- **Behavioral Learning**: Adapting suggestions based on user actions and preferences

### Ground Truth Validation

- **Cross-referencing**: Validation against trusted monitoring stations
- **Data Quality Assurance**: Continuous model improvement and accuracy verification

## Impact & Benefits

AirDreads contributes to global sustainability and health through:

### UN Sustainable Development Goals

- **SDG 3 – Good Health & Well-being**: Protects respiratory health through real-time awareness and actionable insights
- **SDG 11 – Sustainable Cities & Communities**: Supports smart urban air quality management and policy-making
- **SDG 13 – Climate Action**: Promotes environmental monitoring, education, and climate-conscious behavior

### Real-World Impact

- **Empowering Citizens**: Making complex environmental data accessible and actionable for everyone
- **Enabling Policymakers**: Providing data-driven insights for urban planning and environmental policy
- **Creating Healthier Communities**: Building awareness and promoting protective behaviors globally
- **Educational Value**: Transforming environmental science education through interactive experiences

## Team NebXplorers

**Khalid** - Team Leader & Full-Stack Engineer  
_Leading the mission to turn complex NASA data into life-saving solutions_

**Fuad** - Backend Engineering & 3D Experience  
_Powering the backend systems and immersive 3D visualizations_

**Ajoy** - UI/UX Designer & Prototype Development  
_Crafting intuitive interfaces that transform data into action_

**Zaina** - Machine Learning & Data Science  
_Fusing NASA forecasts with intelligent algorithms_

**Rahul** - Visual Design & Media Production  
_Bringing the vision to life through compelling visuals and sound_

## Deployment

### Automated Deployment Pipeline

- **Frontend**: Vercel (Auto-deploy from main branch)
- **Backend Services**: Google Cloud Run (Containerized deployment)
- **Database**: Prisma with PostgreSQL
- **Monitoring**: Cloud logging and health checks

### Production URLs

- **API Service**: https://api-262907936819.asia-southeast1.run.app
- **ML Service**: https://flask-262907936819.asia-southeast1.run.app
- **Frontend**: [Deploy to Vercel to get URL]

## Future Roadmap

### Phase 1: Enhanced User Experience

- **Native Mobile Apps**: iOS and Android applications with offline capabilities
- **Wearable Integration**: Track personal air exposure in real-time through smartwatches and fitness trackers

### Phase 2: Smart Integration

- **Smart Home Integration**: Indoor air quality monitoring via IoT devices and smart home systems
- **Vehicle Integration**: In-car air quality monitoring and route optimization

### Phase 3: Community & Competition

- **Global Leaderboards**: Cities and communities compete for cleaner air rankings
- **Community Challenges**: Collaborative missions and environmental improvement campaigns

### Phase 4: Research & Collaboration

- **Research Portal**: Direct collaboration between scientists, researchers, and users
- **Open Data Platform**: Contributing to global environmental research initiatives
- **Educational Partnerships**: Integration with schools and universities for environmental education

## Conclusion

AirDreads transforms NASA EarthData into actionable, life-saving insights. By merging data science, AI, gamification, and augmented reality, it makes air quality monitoring accessible, engaging, and impactful — empowering everyone to breathe cleaner, healthier air.

**AirDreads – Where Every Move Saves a Breath**

## License & Collaboration

### MIT License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Copyright (c) 2025 Team NebXplorers**

### Open Source & Collaboration

AirDreads is proudly open source and welcomes contributions from the global community. We believe that combating air pollution requires collective effort, and we invite developers, researchers, designers, and environmental enthusiasts to join our mission.

#### How to Contribute

- **Fork the repository** and create your feature branch
- **Submit pull requests** with detailed descriptions of your changes
- **Report issues** and suggest improvements through GitHub Issues
- **Share ideas** for new features or enhancements
- **Help with documentation** and code reviews

#### Areas We Welcome Contributions

- **Data Science & ML**: Enhance our air quality prediction models
- **Frontend Development**: Improve user experience and interface design
- **Backend Engineering**: Optimize API performance and data processing
- **Mobile Development**: Help us build native iOS and Android apps
- **Research**: Contribute to our NASA data integration and analysis
- **Documentation**: Help make our project more accessible
- **Testing**: Improve our test coverage and quality assurance

#### Community Guidelines

We are committed to fostering an inclusive and welcoming environment for all contributors. Please read our contribution guidelines and code of conduct before participating.

**Together, we can make air quality data accessible to everyone and help save lives through technology.**

## Acknowledgments

- **NASA** for providing invaluable satellite data through TEMPO and MERRA-2 missions
- **NASA Space Apps Challenge 2025** for inspiring global innovation and collaboration
- **World Health Organization** for critical air quality health guidelines and research
- **Open Source Community** for the amazing tools, libraries, and frameworks that made this project possible
- **Google Cloud Platform** for providing robust infrastructure and deployment capabilities

---

### "Where Every Move Saves a Breath"

_Transforming invisible air threats into visible, actionable experiences through the power of gamification, AI, and NASA data._

**Made with ❤️ by Team NebXplorers for NASA Space Apps Challenge 2025**

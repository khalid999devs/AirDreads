# 🌍 AirDreads - Where Every Move Saves a Breath

[![NASA Space Apps Challenge 2025](https://img.shields.io/badge/NASA%20Space%20Apps-2025-blue.svg)](https://www.spaceappschallenge.org/)
[![Team NebXplorers](https://img.shields.io/badge/Team-NebXplorers-purple.svg)](#team)
[![Live Demo](https://img.shields.io/badge/Demo-Live-green.svg)](#live-demo)

> **Turning invisible air threats visible through gamification** - A revolutionary platform that transforms complex NASA air quality data into an engaging, life-saving gaming experience.

## 🚨 The Problem

Every breath we take carries risk. **7 million deaths worldwide** are caused by air pollution annually according to WHO. The invisible enemies - ozone, fine particles, toxic gases - silently impact our health while most people remain unaware of the danger lurking in the air around them.

**The Information Crisis**: NASA satellites track pollutants, fires, and aerosols globally every hour, but this powerful data remains locked in dashboards and reports that most people never see.

## 🎮 Our Solution: AirDreads

**AirDreads** bridges the gap between NASA's powerful environmental data and the people who need it most - through an innovative gaming interface that makes air quality monitoring engaging, educational, and actionable.

### ✨ Key Features

🎯 **Gamified Air Quality Monitoring**
- Real-time air quality dashboard with XP rewards
- Mission-based learning about air pollutants
- AR mode to visualize invisible threats
- Progressive challenges that teach safety habits

🤖 **AI-Powered Health Coach (AirBuddy)**
- Personalized health recommendations
- Real-time alerts for dangerous conditions
- Habit-building guidance for safer living

🌐 **Professional Analytics Mode**
- NASA TEMPO and MERRA-2 data integration
- Advanced visualizations for researchers
- Stakeholder dashboards for firefighters, health workers, city planners

🌍 **3D Earth Exploration**
- Fly anywhere, explore any date
- Visualize global air quality patterns
- Historical data analysis and forecasting

## 🏗️ Technical Architecture

### Frontend
- **Next.js 15** - Modern React framework
- **Vercel Deployment** - Global CDN distribution
- **Shared UI Components** - Consistent design system
- **TypeScript** - Type-safe development

### Backend Services
- **Express API** - RESTful services (Google Cloud Run)
- **Python Flask** - ML/AI processing (Google Cloud Run)
- **Prisma ORM** - Database management
- **NASA Data Integration** - TEMPO, MERRA-2 APIs

### Infrastructure
- **Google Cloud Run** - Scalable containerized services
- **Docker** - Containerization for consistent deployments
- **Monorepo** - Organized codebase with shared packages

## 🚀 Live Demo

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

## 🧠 AI & Machine Learning

Our fine-tuned expert model powers AirDreads intelligence:

- **NASA Data Processing**: TEMPO and MERRA-2 satellite data integration
- **Air Quality Calculation**: Real-time AQI computation and validation
- **Predictive Modeling**: Future air quality forecasting
- **Personalized Recommendations**: ML-driven health guidance
- **Ground Truth Validation**: Cross-reference with trusted monitoring stations

## 🌍 Impact & UN SDGs

AirDreads directly contributes to:

- **SDG 3**: Good Health and Well-being - Protecting respiratory health through awareness
- **SDG 11**: Sustainable Cities and Communities - Smart urban air quality management  
- **SDG 13**: Climate Action - Environmental monitoring and education

## 👥 Team NebXplorers

**🚀 Khalid** - Team Leader & Full-Stack Engineer  
*Leading the mission to turn complex NASA data into life-saving solutions*

**⚡ Fuad** - Backend Engineering & 3D Experience  
*Powering the backend systems and immersive 3D visualizations*

**🎨 Ajoy** - UI/UX Designer & Prototype Development  
*Crafting intuitive interfaces that transform data into action*

**🤖 Zaina** - Machine Learning & Data Science  
*Fusing NASA forecasts with intelligent algorithms*

**🎬 Rahul** - Visual Design & Media Production  
*Bringing the vision to life through compelling visuals and sound*

## 🚀 Deployment

### Automated Deployment Pipeline

- **Frontend**: Vercel (Auto-deploy from main branch)
- **Backend Services**: Google Cloud Run (Containerized deployment)
- **Database**: Prisma with PostgreSQL
- **Monitoring**: Cloud logging and health checks

### Production URLs
- **API Service**: https://api-262907936819.asia-southeast1.run.app
- **ML Service**: https://flask-262907936819.asia-southeast1.run.app
- **Frontend**: [Deploy to Vercel to get URL]

## 🔮 Future Roadmap

- **🏃‍♂️ Wearable Integration**: Track personal air exposure in real-time
- **🏠 Smart Home**: Connect with IoT devices for indoor air quality
- **🏆 Global Leaderboards**: Cities compete for cleaner air
- **📱 Mobile Apps**: Native iOS/Android experiences
- **🔬 Research Portal**: Direct scientist-player collaboration

## 📄 License

This project is part of the NASA Space Apps Challenge 2025.

## 🙏 Acknowledgments

- **NASA** for providing invaluable satellite data through TEMPO and MERRA-2
- **Space Apps Challenge** for inspiring global innovation
- **Open Source Community** for the amazing tools and libraries

---

### 🌟 "Where Every Move Saves a Breath" 

*Making invisible air threats visible through the power of gamification and NASA data.*

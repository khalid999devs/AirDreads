# AirDreads Project

## Project Structure

```
airdreads/
├── apps/
│   └── web/           # Next.js web frontend
├── packages/
│   ├── db/            # Database package with Prisma
│   ├── eslint-config/ # Shared ESLint configuration
│   ├── typescript-config/ # Shared TypeScript configuration
│   └── ui/            # Shared UI components
└── services/
    ├── api/           # Node.js Express API service
    └── flask/         # Python Flask service
```

## Docker Commands (Run from Root Directory)

### Run All Services

```bash
cd /Users/khalid999devs/Documents/hackathon/airdreads

docker build -f services/api/Dockerfile -t api:dev . && docker run --rm -p 8080:8080 api:dev &
docker build -t flask:dev ./services/flask && docker run --rm -p 8081:8080 flask:dev &

# Test services
curl http://localhost:8080/health
curl http://localhost:8081/health

# Stop services
kill %1 %2 2>/dev/null || true
```

### Individual Services

#### API Service

```bash
docker build -f services/api/Dockerfile -t api:dev .
docker run --rm -p 8080:8080 api:dev
```

#### Flask Service

```bash
docker build -t flask:dev ./services/flask
docker run --rm -p 8081:8080 flask:dev
```

## Root Commands

### Monorepo Management

```bash
pnpm install
pnpm build
pnpm --filter api dev
pnpm --filter flask dev
```

### Service Ports

- API Service: `localhost:8080`
- Flask Service: `localhost:8081`

## Google Cloud Deployment

### Prerequisites

- Google Cloud CLI installed ✅
- Docker Desktop running ✅

### 1. Choose Your Project ID

Available projects:

```bash
gcloud projects list
```

### 2. Initial Setup (One Time)

Project ID: **airdreads** ✅

**⚠️ BILLING SETUP REQUIRED FIRST:**

1. Go to: https://console.cloud.google.com/billing
2. Reopen your billing account "My Billing Account"
3. Link it to the "airdreads" project

```bash
# Set project and region
gcloud config set project airdreads
gcloud config set run/region asia-southeast1

# Link billing account (after reopening)
gcloud billing projects link airdreads --billing-account=01AD0C-D58F82-DEE4E9

# Enable required services
gcloud services enable \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com \
  secretmanager.googleapis.com \
  logging.googleapis.com

# Create Docker repository
gcloud artifacts repositories create app-repo \
  --repository-format=docker \
  --location=asia-southeast1

# Configure Docker authentication
gcloud auth configure-docker asia-southeast1-docker.pkg.dev
```

### 3. Build and Deploy Flask Service

```bash
# Build and push Flask image (with AMD64 platform for Cloud Run)
docker build --platform linux/amd64 -t asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1 ./services/flask
docker push asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1

# Deploy to Cloud Run
gcloud run deploy flask \
  --image=asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1 \
  --allow-unauthenticated \
  --port=8080 \
  --cpu=1 --memory=1Gi \
  --min-instances=0 --max-instances=3 \
  --timeout=300

# Test deployment
curl https://flask-262907936819.asia-southeast1.run.app/health
```

### 4. Build and Deploy API Service

```bash
# Build and push API image (with AMD64 platform for Cloud Run)
docker build --platform linux/amd64 -f services/api/Dockerfile -t asia-southeast1-docker.pkg.dev/airdreads/app-repo/api:v1 .
docker push asia-southeast1-docker.pkg.dev/airdreads/app-repo/api:v1

# Deploy to Cloud Run
gcloud run deploy api \
  --image=asia-southeast1-docker.pkg.dev/airdreads/app-repo/api:v1 \
  --allow-unauthenticated \
  --port=8080 \
  --cpu=1 --memory=512Mi \
  --min-instances=0 --max-instances=3 \
  --timeout=120

# Test deployment
curl https://api-262907936819.asia-southeast1.run.app/health
```

### 5. Environment Variables & Secrets

```bash
# Set environment variables
gcloud run services update flask \
  --set-env-vars "MODEL_VARIANT=small,LOG_LEVEL=info"

# Create and use secrets
echo -n "sk-your-api-key" | gcloud secrets create OPENAI_API_KEY --data-file=-
gcloud run services update flask \
  --update-secrets "OPENAI_API_KEY=OPENAI_API_KEY:latest"
```

### 6. Useful Commands

```bash
# View logs
gcloud logs tail --project airdreads --service=flask
gcloud logs tail --project airdreads --service=api

# Keep services warm (optional)
gcloud run services update flask --min-instances=1

# Cleanup (delete services)
gcloud run services delete flask --region=asia-southeast1
gcloud run services delete api --region=asia-southeast1
```

## 🌐 **Live Services**

### Production URLs:

- **Flask Service**: https://flask-262907936819.asia-southeast1.run.app/health
- **API Service**: https://api-262907936819.asia-southeast1.run.app/health

### Status: ✅ **All services operational**

## 📝 **Quick Reference**

### Most Common Commands:

```bash
# Local development
cd /Users/khalid999devs/Documents/hackathon/airdreads
docker build -f services/api/Dockerfile -t api:dev . && docker run --rm -p 8080:8080 api:dev &
docker build -t flask:dev ./services/flask && docker run --rm -p 8081:8080 flask:dev &

# Frontend development
pnpm --filter web dev  # Runs Next.js on http://localhost:3000

# Deploy updates to production
docker build --platform linux/amd64 -t asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1 ./services/flask
docker push asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1
gcloud run deploy flask --image=asia-southeast1-docker.pkg.dev/airdreads/app-repo/flask:v1
```

## 🌐 **Frontend Deployment (Vercel)**

### Prerequisites:

- GitHub/GitLab repository
- Vercel account

### Automatic Deployment:

1. **Push code to GitHub**
2. **Import repository in Vercel**
3. **Set Root Directory**: `apps/web`
4. **Vercel auto-detects monorepo and builds with shared packages**

### Configuration:

- Uses `vercel.json` in root directory ✅
- Shared packages (`@repo/ui`, `@repo/db`) are automatically bundled
- No separate hosting needed for packages

### Local Frontend Development:

```bash
# Run Next.js frontend locally
pnpm --filter web dev
# Frontend: http://localhost:3000
# API: http://localhost:8080 (if running)
# Flask: http://localhost:8081 (if running)
```

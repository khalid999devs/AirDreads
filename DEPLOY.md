# Vercel Deployment Commands

# Run these commands to deploy

# 1. Install Vercel CLI globally

npm install -g vercel

# 2. Login to Vercel

vercel login

# 3. Deploy from project root

cd /Users/khalid999devs/Documents/hackathon/airdreads
vercel

# 4. For subsequent deployments

vercel --prod

# Environment Variables to set in Vercel Dashboard:

# NEXT_PUBLIC_EXPRESS_API_URL=https://api-262907936819.asia-southeast1.run.app

# NEXT_PUBLIC_FLASK_API_URL=https://flask-262907936819.asia-southeast1.run.app

# NEXT_PUBLIC_NEXTJS_API_URL=https://[your-domain].vercel.app/api

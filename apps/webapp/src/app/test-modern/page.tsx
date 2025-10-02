"use client";

import Link from "next/link";
import { Button } from "../../components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
// import { useTranslations } from '@/lib/use-translations';
import {
  ServiceStatusCard,
  FlaskPredictionTest,
  SystemOverview,
} from "@/components/modern-api-test";

export default function TestPage() {
  // const { t } = useTranslations();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                🌍 AirDreads
              </Link>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                API Testing
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              🧪 API Configuration & Testing
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time monitoring and testing of all AirDreads backend
              services. Powered by Axios + TanStack Query for optimal
              performance.
            </p>
          </div>

          {/* System Overview */}
          <SystemOverview />

          {/* Service Testing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceStatusCard
              service="nextjs"
              title="Next.js API"
              description="Internal API routes"
              icon="⚡"
            />

            <ServiceStatusCard
              service="express"
              title="Express Server"
              description="Node.js backend service"
              icon="🚀"
            />

            <ServiceStatusCard
              service="flask"
              title="Flask ML Service"
              description="Python AI/ML backend"
              icon="🐍"
            />
          </div>

          {/* Flask ML Prediction Testing */}
          <div className="grid lg:grid-cols-2 gap-6">
            <FlaskPredictionTest />

            {/* Configuration Info */}
            <div className="border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">⚙️</div>
                <div>
                  <h3 className="font-semibold text-lg">Configuration</h3>
                  <p className="text-sm text-muted-foreground">
                    Current API endpoints and settings
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Environment:</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800">
                    {process.env.NODE_ENV}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="font-medium">Service URLs:</div>
                  <div className="pl-4 space-y-1 text-xs font-mono">
                    <div>Next.js: localhost:3002/api</div>
                    <div>Express: localhost:8080</div>
                    <div>Flask: localhost:8081</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium">Features:</div>
                  <div className="pl-4 space-y-1 text-xs">
                    <div>✅ Automatic retry with exponential backoff</div>
                    <div>✅ Request/response interceptors</div>
                    <div>✅ Smart caching with stale-while-revalidate</div>
                    <div>✅ Real-time health monitoring</div>
                    <div>✅ Development-only query devtools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center pt-8 border-t border-border">
            <Button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              appName="webapp"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </div>

      {/* React Query Devtools (only in development) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-black/80 text-white px-3 py-1 rounded text-xs">
            React Query DevTools: F12 → Bottom Panel
          </div>
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import { Button } from "@repo/ui/button";
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with AirDreads branding */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold">
              <span className="text-primary">Air</span>
              <span className="text-secondary">Dreads</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hello World! Start your air quality journey from here.
            </p>
          </div>

          {/* See AppConfigs Button */}
          <div className="mt-8">
            <Link href="/test">
              <Button
                appName="AirDreads"
                className="px-8 py-4 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors"
              >
                See AppConfigs
              </Button>
            </Link>
          </div>

          {/* Status Badge */}
          <div className="mt-16 inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              NASA Space Apps Challenge 2025
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

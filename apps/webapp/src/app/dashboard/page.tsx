"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/use-translations";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export default function Dashboard() {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">
              <span className="text-primary">Air</span>
              <span className="text-secondary">Dreads</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link href="/dashboard" className="text-primary font-medium">
              {t("dashboard")}
            </Link>
            <Link
              href="/challenges"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("challenges")}
            </Link>
            <Link
              href="/leaderboard"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("leaderboard")}
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">{t("dashboard")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor your air quality journey and track your environmental
              impact.
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Air Quality Status */}
            <div className="p-6 bg-card text-card-foreground border border-border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">🌬️</div>
                <div>
                  <h3 className="text-lg font-semibold">Current AQI</h3>
                  <p className="text-2xl font-bold text-success">42</p>
                  <p className="text-sm text-muted-foreground">Good</p>
                </div>
              </div>
            </div>

            {/* Your Score */}
            <div className="p-6 bg-card text-card-foreground border border-border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">⭐</div>
                <div>
                  <h3 className="text-lg font-semibold">Your Score</h3>
                  <p className="text-2xl font-bold text-primary">1,247</p>
                  <p className="text-sm text-muted-foreground">+23 today</p>
                </div>
              </div>
            </div>

            {/* Rank */}
            <div className="p-6 bg-card text-card-foreground border border-border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">🏆</div>
                <div>
                  <h3 className="text-lg font-semibold">Global Rank</h3>
                  <p className="text-2xl font-bold text-secondary">#156</p>
                  <p className="text-sm text-muted-foreground">Top 5%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Recent Activity</h2>
            <div className="space-y-3">
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">🚴</div>
                    <div>
                      <p className="font-medium">Completed cycling challenge</p>
                      <p className="text-sm text-muted-foreground">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <span className="text-success font-semibold">+50 XP</span>
                </div>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">🌱</div>
                    <div>
                      <p className="font-medium">Planted virtual tree</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <span className="text-success font-semibold">+25 XP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

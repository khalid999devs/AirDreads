"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/use-translations";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export default function Leaderboard() {
  const { t } = useTranslations();

  const leaderboardData = [
    {
      rank: 1,
      name: "EcoWarrior23",
      score: 5420,
      badge: "🥇",
      location: "San Francisco, CA",
    },
    {
      rank: 2,
      name: "CleanAirChamp",
      score: 4890,
      badge: "🥈",
      location: "Portland, OR",
    },
    {
      rank: 3,
      name: "GreenGuru",
      score: 4650,
      badge: "🥉",
      location: "Seattle, WA",
    },
    {
      rank: 4,
      name: "AirQualityNinja",
      score: 4320,
      badge: "🏆",
      location: "Denver, CO",
    },
    {
      rank: 5,
      name: "EcoFriendly42",
      score: 4100,
      badge: "⭐",
      location: "Austin, TX",
    },
    {
      rank: 6,
      name: "PlanetSaver",
      score: 3950,
      badge: "⭐",
      location: "Boston, MA",
    },
    {
      rank: 7,
      name: "CleanBreather",
      score: 3800,
      badge: "⭐",
      location: "Chicago, IL",
    },
    {
      rank: 8,
      name: "GreenLifestyle",
      score: 3650,
      badge: "⭐",
      location: "Miami, FL",
    },
  ];

  const currentUser = { rank: 156, name: "You", score: 1247 };

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
            <Link
              href="/dashboard"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("dashboard")}
            </Link>
            <Link
              href="/challenges"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("challenges")}
            </Link>
            <Link href="/leaderboard" className="text-primary font-medium">
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
            <h1 className="text-4xl font-bold">{t("leaderboard")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how you rank against other AirDreads users worldwide.
            </p>
          </div>

          {/* Your Rank Card */}
          <div className="p-6 bg-primary/10 border-2 border-primary rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">👤</div>
                <div>
                  <h3 className="text-lg font-semibold">Your Current Rank</h3>
                  <p className="text-muted-foreground">
                    Keep up the great work!
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">
                  #{currentUser.rank}
                </div>
                <div className="text-lg font-semibold">
                  {currentUser.score.toLocaleString()} XP
                </div>
              </div>
            </div>
          </div>

          {/* Top Players */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Top Players</h2>
            <div className="space-y-3">
              {leaderboardData.map((player) => (
                <div
                  key={player.rank}
                  className={`p-4 rounded-lg border transition-all hover:shadow-lg ${
                    player.rank <= 3
                      ? "bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20"
                      : "bg-card border-border"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                        <span className="text-2xl">{player.badge}</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-muted-foreground">
                            #{player.rank}
                          </span>
                          <h3 className="text-lg font-semibold">
                            {player.name}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {player.location}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">
                        {player.score.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">XP</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-2xl font-bold text-primary">10,247</div>
              <div className="text-sm text-muted-foreground">Total Players</div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-secondary">2,341</div>
              <div className="text-sm text-muted-foreground">
                Challenges Completed
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="text-3xl mb-2">💨</div>
              <div className="text-2xl font-bold text-success">89%</div>
              <div className="text-sm text-muted-foreground">
                Air Quality Improvement
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

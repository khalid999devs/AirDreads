"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/use-translations";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export default function Challenges() {
  const { t } = useTranslations();

  const challenges = [
    {
      id: 1,
      title: "Clean Air Commute",
      description: "Use eco-friendly transportation for 7 days",
      reward: 200,
      progress: 4,
      total: 7,
      icon: "🚲",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Air Quality Detective",
      description: "Report 5 air quality observations in your area",
      reward: 150,
      progress: 2,
      total: 5,
      icon: "🔍",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Green Energy Champion",
      description: "Reduce household energy consumption by 20%",
      reward: 500,
      progress: 0,
      total: 1,
      icon: "⚡",
      difficulty: "Hard",
    },
  ];

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
            <Link href="/challenges" className="text-primary font-medium">
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
            <h1 className="text-4xl font-bold">{t("challenges")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete challenges to earn XP and improve air quality awareness.
            </p>
          </div>

          {/* Active Challenges */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Active Challenges</h2>
            <div className="grid gap-6">
              {challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="p-6 bg-card text-card-foreground border border-border rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{challenge.icon}</div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-xl font-semibold">
                            {challenge.title}
                          </h3>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              challenge.difficulty === "Easy"
                                ? "bg-success text-success-foreground"
                                : challenge.difficulty === "Medium"
                                  ? "bg-secondary text-secondary-foreground"
                                  : "bg-destructive text-destructive-foreground"
                            }`}
                          >
                            {challenge.difficulty}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {challenge.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>
                              {challenge.progress}/{challenge.total}
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{
                                width: `${(challenge.progress / challenge.total) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right space-y-2">
                      <div className="text-2xl font-bold text-primary">
                        +{challenge.reward}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        XP Reward
                      </div>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        {challenge.progress === challenge.total
                          ? "Claim"
                          : "Continue"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <div className="p-6 bg-muted/20 border-2 border-dashed border-border rounded-lg text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">
                More Challenges Coming
              </h3>
              <p className="text-muted-foreground">
                We&apos;re working on exciting new challenges to help you make
                an even bigger impact!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/use-translations";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export default function About() {
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
            <Link
              href="/leaderboard"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("leaderboard")}
            </Link>
            <Link href="/about" className="text-primary font-medium">
              {t("about")}
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
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">{t("about")}</h1>
            <p className="text-xl text-muted-foreground">
              Learn about our mission to make air quality data accessible and
              actionable.
            </p>
          </div>

          {/* Mission Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Our Mission</h2>
            <div className="p-8 bg-card border border-border rounded-lg">
              <p className="text-lg leading-relaxed text-center">
                AirDreads transforms complex NASA air quality data into
                engaging, gamified experiences that empower individuals to make
                informed decisions about their health and environment. We
                believe that by making invisible air threats visible through
                interactive challenges and real-time data, we can inspire
                collective action toward cleaner air for all.
              </p>
            </div>
          </section>

          {/* NASA Space Apps Challenge */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">
              NASA Space Apps Challenge 2024
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="text-4xl mb-4 text-center">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Challenge Theme</h3>
                <p className="text-muted-foreground">
                  Developed as part of NASA&apos;s Space Apps Challenge,
                  focusing on leveraging satellite data and ground sensors to
                  create innovative solutions for environmental awareness and
                  public health.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="text-4xl mb-4 text-center">🛰️</div>
                <h3 className="text-xl font-semibold mb-3">Data Sources</h3>
                <p className="text-muted-foreground">
                  Integrates real-time data from NASA satellites, EPA monitoring
                  stations, and community sensors to provide comprehensive air
                  quality insights with global coverage and local relevance.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-lg font-semibold mb-2">Gamification</h3>
                <p className="text-muted-foreground text-sm">
                  Earn XP, complete challenges, and compete with friends while
                  making positive environmental choices.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2">Real-time Data</h3>
                <p className="text-muted-foreground text-sm">
                  Access live air quality information from NASA satellites and
                  ground monitoring stations worldwide.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Personalized</h3>
                <p className="text-muted-foreground text-sm">
                  Get customized recommendations and challenges based on your
                  location, preferences, and environmental goals.
                </p>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Technology</h2>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Frontend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Next.js 15 with App Router</li>
                    <li>• React 19 with TypeScript</li>
                    <li>• Tailwind CSS v4</li>
                    <li>• Internationalization (i18n)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Backend & Data</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• NASA Earth Data APIs</li>
                    <li>• EPA Air Quality APIs</li>
                    <li>• Real-time satellite imagery</li>
                    <li>• Cloud deployment ready</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Built with ❤️</h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground">
                Created during the NASA Space Apps Challenge 2024 with the goal
                of making environmental data more accessible and actionable for
                everyone.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg">
                  #NASA2024
                </div>
                <div className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg">
                  #SpaceApps
                </div>
                <div className="px-4 py-2 bg-success/10 text-success rounded-lg">
                  #CleanAir
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@repo/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslations } from "@/lib/use-translations";

// Server Test Card Component
function ServerTestCard({
  title,
  description,
  endpoint,
  icon,
}: {
  title: string;
  description: string;
  endpoint: string;
  icon: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<{
    status: "success" | "error" | null;
    data: Record<string, unknown> | null;
    time: number;
  }>({ status: null, data: null, time: 0 });

  const testServer = async () => {
    setIsLoading(true);
    const startTime = Date.now();

    try {
      const res = await fetch(endpoint + "/health", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      const endTime = Date.now();

      setResponse({
        status: res.ok ? "success" : "error",
        data: data,
        time: endTime - startTime,
      });
    } catch (error) {
      const endTime = Date.now();
      setResponse({
        status: "error",
        data: {
          error: error instanceof Error ? error.message : "Unknown error",
        },
        time: endTime - startTime,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 bg-card text-card-foreground border border-border rounded-lg hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">{icon}</div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{endpoint}</p>
          </div>
        </div>

        <p className="text-muted-foreground">{description}</p>

        <button
          onClick={testServer}
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            isLoading
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {isLoading ? "Testing..." : "Test Connection"}
        </button>

        {response.status && (
          <div
            className={`p-4 rounded-lg border ${
              response.status === "success"
                ? "bg-success/10 border-success/20 text-success"
                : "bg-destructive/10 border-destructive/20 text-destructive"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">
                {response.status === "success" ? "✅ Success" : "❌ Failed"}
              </span>
              <span className="text-sm">{response.time}ms</span>
            </div>
            <pre className="text-xs overflow-auto max-h-32">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

// Next.js API Test Card Component
function NextJSTestCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<{
    status: "success" | "error" | null;
    data: Record<string, unknown> | null;
    time: number;
  }>({ status: null, data: null, time: 0 });

  const testNextAPI = async () => {
    setIsLoading(true);
    const startTime = Date.now();

    try {
      const res = await fetch("/api/test", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      const endTime = Date.now();

      setResponse({
        status: res.ok ? "success" : "error",
        data: data,
        time: endTime - startTime,
      });
    } catch (error) {
      const endTime = Date.now();
      setResponse({
        status: "error",
        data: {
          error: error instanceof Error ? error.message : "Unknown error",
        },
        time: endTime - startTime,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 bg-card text-card-foreground border border-border rounded-lg hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">▲</div>
          <div>
            <h3 className="text-xl font-semibold">Next.js API Route</h3>
            <p className="text-sm text-muted-foreground">/api/test</p>
          </div>
        </div>

        <p className="text-muted-foreground">
          Test the Next.js internal API route
        </p>

        <button
          onClick={testNextAPI}
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            isLoading
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
          }`}
        >
          {isLoading ? "Testing..." : "Test API Route"}
        </button>

        {response.status && (
          <div
            className={`p-4 rounded-lg border ${
              response.status === "success"
                ? "bg-success/10 border-success/20 text-success"
                : "bg-destructive/10 border-destructive/20 text-destructive"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">
                {response.status === "success" ? "✅ Success" : "❌ Failed"}
              </span>
              <span className="text-sm">{response.time}ms</span>
            </div>
            <pre className="text-xs overflow-auto max-h-32">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

// Flask Test Card Component with multiple endpoints
function FlaskTestCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTest, setActiveTest] = useState<"health" | "predict" | null>(
    null,
  );
  const [response, setResponse] = useState<{
    status: "success" | "error" | null;
    data: Record<string, unknown> | null;
    time: number;
    endpoint: string;
  }>({ status: null, data: null, time: 0, endpoint: "" });

  const testFlaskEndpoint = async (endpoint: "health" | "predict") => {
    setIsLoading(true);
    setActiveTest(endpoint);
    const startTime = Date.now();

    try {
      const url = `http://localhost:8081/${endpoint}`;
      const options: RequestInit = {
        method: endpoint === "health" ? "GET" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (endpoint === "predict") {
        options.body = JSON.stringify({ x: 42 });
      }

      const res = await fetch(url, options);
      const data = await res.json();
      const endTime = Date.now();

      setResponse({
        status: res.ok ? "success" : "error",
        data: data,
        time: endTime - startTime,
        endpoint: `${endpoint.toUpperCase()} /${endpoint}`,
      });
    } catch (error) {
      const endTime = Date.now();
      setResponse({
        status: "error",
        data: {
          error: error instanceof Error ? error.message : "Unknown error",
        },
        time: endTime - startTime,
        endpoint: `${endpoint.toUpperCase()} /${endpoint}`,
      });
    } finally {
      setIsLoading(false);
      setActiveTest(null);
    }
  };

  return (
    <div className="p-8 bg-card text-card-foreground border border-border rounded-lg hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🐍</div>
          <div>
            <h3 className="text-xl font-semibold">Flask Python Server</h3>
            <p className="text-sm text-muted-foreground">
              localhost:8081 (Docker)
            </p>
          </div>
        </div>

        <p className="text-muted-foreground">
          Test Flask server endpoints: health check and prediction
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => testFlaskEndpoint("health")}
            disabled={isLoading}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              isLoading && activeTest === "health"
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {isLoading && activeTest === "health"
              ? "Testing..."
              : "Test Health"}
          </button>

          <button
            onClick={() => testFlaskEndpoint("predict")}
            disabled={isLoading}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              isLoading && activeTest === "predict"
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
            }`}
          >
            {isLoading && activeTest === "predict"
              ? "Testing..."
              : "Test Predict"}
          </button>
        </div>

        {response.status && (
          <div
            className={`p-4 rounded-lg border ${
              response.status === "success"
                ? "bg-success/10 border-success/20 text-success"
                : "bg-destructive/10 border-destructive/20 text-destructive"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">
                {response.status === "success" ? "✅ Success" : "❌ Failed"} -{" "}
                {response.endpoint}
              </span>
              <span className="text-sm">{response.time}ms</span>
            </div>
            <pre className="text-xs overflow-auto max-h-32">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TestPage() {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Theme and Language Toggles */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-primary">Air</span>
              <span className="text-2xl font-bold text-secondary">Dreads</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
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
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("about")}
            </Link>
          </nav>

          {/* Theme and Language Toggles */}
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold">
              <span className="text-primary">Air</span>
              <span className="text-secondary">Dreads</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              appName="AirDreads"
              className="px-8 py-3 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors"
            >
              {t("startJourney")}
            </Button>
            <Button
              appName="AirDreads"
              className="px-8 py-3 text-lg border-2 border-border text-foreground hover:bg-muted rounded-lg font-semibold transition-colors"
            >
              {t("viewDemo")}
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t("features")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card text-card-foreground border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-xl font-semibold mb-4">
                {t("realTimeData")}
              </h3>
              <p className="text-muted-foreground">{t("realTimeDataDesc")}</p>
            </div>
            <div className="p-8 bg-card text-card-foreground border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">
                {t("personalizedInsights")}
              </h3>
              <p className="text-muted-foreground">
                {t("personalizedInsightsDesc")}
              </p>
            </div>
            <div className="p-8 bg-card text-card-foreground border border-border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-4">
                {t("globalCoverage")}
              </h3>
              <p className="text-muted-foreground">{t("globalCoverageDesc")}</p>
            </div>
          </div>
        </section>

        {/* Server Testing Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            🖥️ Server Testing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <NextJSTestCard />
            <ServerTestCard
              title="Express API Server"
              description="Test /health endpoint on the Node.js Express server (Docker port 8080)"
              endpoint="http://localhost:8080"
              icon="⚡"
            />
            <FlaskTestCard />
          </div>
        </section>

        {/* COLOR TESTING SECTION - All Theme Colors */}
        <div className="w-full max-w-6xl mx-auto mt-16 p-8 bg-surface border border-border rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">
            🎨 Theme Color Testing
          </h2>

          {/* Text Colors Testing */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Text Colors:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-surface border border-border rounded">
                <p className="text-primary font-semibold">text-primary</p>
                <p className="text-xs opacity-75">Primary brand color</p>
              </div>
              <div className="p-3 bg-surface border border-border rounded">
                <p className="text-secondary font-semibold">text-secondary</p>
                <p className="text-xs opacity-75">Secondary brand color</p>
              </div>
              <div className="p-3 bg-surface border border-border rounded">
                <p className="text-success font-semibold">text-success</p>
                <p className="text-xs opacity-75">Success green</p>
              </div>
              <div className="p-3 bg-surface border border-border rounded">
                <p className="text-destructive font-semibold">
                  text-destructive
                </p>
                <p className="text-xs opacity-75">Error/destructive red</p>
              </div>
              <div className="p-3 bg-surface border border-border rounded">
                <p className="text-on-surface font-semibold">text-on-surface</p>
                <p className="text-xs opacity-75">Main text color</p>
              </div>
              <div className="p-3 bg-surface border border-border rounded">
                <p className="text-muted-foreground font-semibold">
                  text-muted-foreground
                </p>
                <p className="text-xs opacity-75">Muted text</p>
              </div>
              <div className="p-3 bg-surface border border-border rounded">
                <p className="text-on-primary font-semibold">text-on-primary</p>
                <p className="text-xs opacity-75">Text on primary</p>
              </div>
              <div className="p-3 bg-surface border border-border rounded">
                <p className="text-on-secondary font-semibold">
                  text-on-secondary
                </p>
                <p className="text-xs opacity-75">Text on secondary</p>
              </div>
            </div>
          </div>

          {/* Background Colors Testing */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Background Colors:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary text-on-primary p-4 rounded">
                <p className="font-semibold">bg-primary</p>
                <p className="text-sm opacity-90">Primary background</p>
              </div>
              <div className="bg-secondary text-on-secondary p-4 rounded">
                <p className="font-semibold">bg-secondary</p>
                <p className="text-sm opacity-90">Secondary background</p>
              </div>
              <div className="bg-success text-on-success p-4 rounded">
                <p className="font-semibold">bg-success</p>
                <p className="text-sm opacity-90">Success background</p>
              </div>
              <div className="bg-destructive text-on-error p-4 rounded">
                <p className="font-semibold">bg-destructive</p>
                <p className="text-sm opacity-90">Error background</p>
              </div>
              <div className="bg-surface text-on-surface p-4 rounded border border-border">
                <p className="font-semibold">bg-surface</p>
                <p className="text-sm opacity-75">Surface background</p>
              </div>
              <div className="bg-background text-on-surface p-4 rounded border border-border">
                <p className="font-semibold">bg-background</p>
                <p className="text-sm opacity-75">Main background</p>
              </div>
              <div className="bg-muted text-muted-foreground p-4 rounded border border-border">
                <p className="font-semibold">bg-muted</p>
                <p className="text-sm opacity-75">Muted background</p>
              </div>
              <div className="bg-card text-card-foreground p-4 rounded border border-border">
                <p className="font-semibold">bg-card</p>
                <p className="text-sm opacity-75">Card background</p>
              </div>
            </div>
          </div>

          {/* Border and Ring Testing */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Borders & Rings:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 border border-border rounded">
                <p className="font-semibold">border-border</p>
                <p className="text-sm text-muted-foreground">Default border</p>
              </div>
              <div className="p-4 border-2 border-primary rounded">
                <p className="font-semibold">border-primary</p>
                <p className="text-sm text-muted-foreground">Primary border</p>
              </div>
              <div className="p-4 border-2 border-success rounded">
                <p className="font-semibold">border-success</p>
                <p className="text-sm text-muted-foreground">Success border</p>
              </div>
              <div className="p-4 border border-border rounded focus-within:ring-2 focus-within:ring-ring">
                <input
                  className="w-full bg-transparent outline-none"
                  placeholder="focus for ring-ring"
                />
              </div>
              <div className="p-4 border border-border rounded focus-within:ring-2 focus-within:ring-primary">
                <input
                  className="w-full bg-transparent outline-none"
                  placeholder="focus for ring-primary"
                />
              </div>
              <div className="p-4 border border-border rounded focus-within:ring-2 focus-within:ring-success">
                <input
                  className="w-full bg-transparent outline-none"
                  placeholder="focus for ring-success"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards - Testing ALL Theme Colors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {/* Primary Theme */}
          <div className="bg-primary text-on-primary rounded-lg p-6 space-y-3">
            <div className="text-3xl">🎮</div>
            <h3 className="text-lg font-semibold">Primary Theme</h3>
            <p className="text-sm opacity-90">
              Gamified air quality monitoring with XP rewards
            </p>
          </div>

          {/* Secondary Theme */}
          <div className="bg-secondary text-on-secondary rounded-lg p-6 space-y-3">
            <div className="text-3xl">🤖</div>
            <h3 className="text-lg font-semibold">Secondary Theme</h3>
            <p className="text-sm opacity-90">
              AI Health Coach with personalized recommendations
            </p>
          </div>

          {/* Success Theme */}
          <div className="bg-success text-on-success rounded-lg p-6 space-y-3">
            <div className="text-3xl">🛰️</div>
            <h3 className="text-lg font-semibold">Success Theme</h3>
            <p className="text-sm opacity-90">
              NASA TEMPO and MERRA-2 satellite data integration
            </p>
          </div>

          {/* Error/Destructive Theme */}
          <div className="bg-destructive text-on-error rounded-lg p-6 space-y-3">
            <div className="text-3xl">⚠️</div>
            <h3 className="text-lg font-semibold">Error Theme</h3>
            <p className="text-sm opacity-90">
              Critical air quality alerts and warnings
            </p>
          </div>
        </div>

        {/* Surface & Border Testing */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-surface border-2 border-border rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Surface Background
            </h3>
            <p className="text-muted-foreground">
              This card uses{" "}
              <code className="bg-ring/10 px-2 py-1 rounded text-ring">
                bg-surface
              </code>{" "}
              with{" "}
              <code className="bg-ring/10 px-2 py-1 rounded text-ring">
                border-border
              </code>
            </p>
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-input rounded"></div>
              <span className="text-sm text-muted-foreground">
                Input color sample
              </span>
            </div>
          </div>

          <div className="bg-card border-2 border-border rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-semibold text-card-foreground">
              Card Background
            </h3>
            <p className="text-muted-foreground">
              This uses{" "}
              <code className="bg-ring/10 px-2 py-1 rounded text-ring">
                bg-card
              </code>{" "}
              with{" "}
              <code className="bg-ring/10 px-2 py-1 rounded text-ring">
                text-card-foreground
              </code>
            </p>
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-ring rounded"></div>
              <span className="text-sm text-muted-foreground">
                Ring color sample
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        {/* Comprehensive Theme Color Testing */}
        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Complete Theme Color Showcase
          </h2>

          {/* Text Colors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-popover border border-border p-4 rounded-lg text-center">
              <div className="text-foreground font-semibold mb-2">
                Foreground
              </div>
              <div className="text-popover-foreground text-sm">
                popover-foreground
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg text-center">
              <div className="text-muted-foreground font-semibold mb-2">
                Muted
              </div>
              <div className="text-muted-foreground text-sm">
                muted-foreground
              </div>
            </div>

            <div className="bg-accent p-4 rounded-lg text-center">
              <div className="text-accent-foreground font-semibold mb-2">
                Accent
              </div>
              <div className="text-accent-foreground text-sm">
                accent-foreground
              </div>
            </div>

            <div className="bg-background border-2 border-border p-4 rounded-lg text-center">
              <div className="text-foreground font-semibold mb-2">
                Background
              </div>
              <div className="text-muted-foreground text-sm">
                Default background
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Form Elements</h4>
              <div className="bg-input border border-border rounded p-3 text-foreground">
                Input background color
              </div>
              <div className="w-full h-2 bg-ring rounded"></div>
              <p className="text-sm text-muted-foreground">
                Ring color (focus states)
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Surface Types</h4>
              <div className="bg-card border border-border rounded p-3">
                <span className="text-card-foreground">Card surface</span>
              </div>
              <div className="bg-popover border border-border rounded p-3">
                <span className="text-popover-foreground">Popover surface</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Status Colors</h4>
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 bg-primary rounded"></div>
                <span className="text-primary text-sm">Primary</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 bg-secondary rounded"></div>
                <span className="text-secondary text-sm">Secondary</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 bg-success rounded"></div>
                <span className="text-success text-sm">Success</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 bg-destructive rounded"></div>
                <span className="text-destructive text-sm">Destructive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action with Multiple Button Variants */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
          <Button
            appName="AirDreads"
            className="px-8 py-3 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors"
          >
            {t("startJourney")}
          </Button>
          <Button
            appName="AirDreads"
            className="px-8 py-3 text-lg border-2 border-border text-foreground hover:bg-muted rounded-lg font-semibold transition-colors"
          >
            {t("viewDemo")}
          </Button>
          <Button
            appName="AirDreads"
            className="px-8 py-3 text-lg bg-success text-on-success hover:bg-success/90 rounded-lg font-semibold transition-colors"
          >
            Success Action
          </Button>
          <Button
            appName="AirDreads"
            className="px-8 py-3 text-lg bg-destructive text-on-error hover:bg-destructive/90 rounded-lg font-semibold transition-colors"
          >
            Emergency Alert
          </Button>
        </div>

        {/* Status Badge */}
        <div className="mt-16 inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">
            NASA Space Apps Challenge 2025
          </span>
        </div>
      </main>
    </div>
  );
}

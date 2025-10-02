"use client";

import { useLocale } from "../providers/locale-provider";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "bn" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="
        relative inline-flex h-10 w-16 items-center justify-center
        rounded-lg border border-border bg-card
        hover:bg-muted transition-colors
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
      "
      aria-label={`Switch to ${locale === "en" ? "Bangla" : "English"}`}
    >
      <span className="text-sm font-medium text-foreground">
        {locale === "en" ? "বাং" : "EN"}
      </span>
    </button>
  );
}

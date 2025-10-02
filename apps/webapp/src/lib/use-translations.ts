import { useLocale } from "../providers/locale-provider";
import { translations } from "./translations";

export function useTranslations() {
  const { locale } = useLocale();

  return {
    t: (key: keyof typeof translations.en) => {
      const translation = translations[locale as keyof typeof translations];
      return translation?.[key] || translations.en[key];
    },
    locale,
  };
}

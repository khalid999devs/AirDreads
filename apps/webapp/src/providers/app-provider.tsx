"use client";

import { useState, useMemo, ReactNode } from "react";
import { AppContext, AppContextValue } from "../context/app-context";

export function AppProvider({ children }: { children: ReactNode }) {
  const [initialized] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const value = useMemo<AppContextValue>(
    () => ({
      initialized,
      sidebarOpen,
      setSidebarOpen,
      loading,
      setLoading,
    }),
    [initialized, sidebarOpen, loading],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

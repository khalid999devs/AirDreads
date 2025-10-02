"use client";

import { createContext, useContext } from "react";

export interface AppContextValue {
  initialized: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return ctx;
}

export { AppContext };

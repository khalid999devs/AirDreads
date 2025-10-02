import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { nextjsApi, expressApi, flaskApi } from "./api-config";

// Query Keys for consistent caching
export const queryKeys = {
  health: {
    nextjs: ["health", "nextjs"] as const,
    express: ["health", "express"] as const,
    flask: ["health", "flask"] as const,
  },
  prediction: {
    all: ["predictions"] as const,
    byId: (id: string) => ["predictions", id] as const,
  },
} as const;

// API Response Types
interface HealthResponse {
  status: string;
  message: string;
  timestamp?: string;
  service?: string;
}

interface PredictionRequest {
  data: Record<string, unknown>;
}

interface PredictionResponse {
  result: unknown;
  confidence?: number;
  processing_time?: number;
}

// Next.js API Health Check
export const useNextjsHealth = () => {
  return useQuery({
    queryKey: queryKeys.health.nextjs,
    queryFn: async (): Promise<HealthResponse> => {
      const response = await nextjsApi.get("/test");
      // Transform Next.js API response to match HealthResponse interface
      return {
        status: response.data.success ? "ok" : "error",
        message: response.data.message,
        timestamp: response.data.timestamp,
        service: "nextjs-api",
      };
    },
    // Check health every 30 seconds
    refetchInterval: 30000,
    // Keep trying if it fails (service discovery)
    retry: 3,
  });
};

// Express API Health Check
export const useExpressHealth = () => {
  return useQuery({
    queryKey: queryKeys.health.express,
    queryFn: async (): Promise<HealthResponse> => {
      const response = await expressApi.get("/health");
      // Transform Express API response to match HealthResponse interface
      return {
        status: response.data.ok ? "ok" : "error",
        message: "Express server is running",
        timestamp: new Date().toISOString(),
        service: response.data.service || "express-api",
      };
    },
    refetchInterval: 30000,
    retry: 3,
  });
};

// Flask API Health Check
export const useFlaskHealth = () => {
  return useQuery({
    queryKey: queryKeys.health.flask,
    queryFn: async (): Promise<HealthResponse> => {
      const response = await flaskApi.get("/health");
      // Transform Flask API response to match HealthResponse interface
      return {
        status: response.data.ok ? "ok" : "error",
        message: "Flask ML service is running",
        timestamp: new Date().toISOString(),
        service: response.data.service || "flask-ml",
      };
    },
    refetchInterval: 30000,
    retry: 3,
  });
};

// Flask Prediction Endpoint
export const useFlaskPrediction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (
      data: PredictionRequest,
    ): Promise<PredictionResponse> => {
      const response = await flaskApi.post("/predict", data);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate related queries after successful prediction
      queryClient.invalidateQueries({
        queryKey: queryKeys.prediction.all,
      });
    },
    onError: (error) => {
      console.error("Prediction failed:", error);
    },
  });
};

// Custom hook for all service health status
export const useAllServicesHealth = () => {
  const nextjsHealth = useNextjsHealth();
  const expressHealth = useExpressHealth();
  const flaskHealth = useFlaskHealth();

  return {
    nextjs: nextjsHealth,
    express: expressHealth,
    flask: flaskHealth,
    allLoading:
      nextjsHealth.isLoading ||
      expressHealth.isLoading ||
      flaskHealth.isLoading,
    allHealthy:
      !nextjsHealth.isError && !expressHealth.isError && !flaskHealth.isError,
    anyError:
      nextjsHealth.isError || expressHealth.isError || flaskHealth.isError,
  };
};

// Helper hook for service connectivity status
export const useServiceStatus = (service: "nextjs" | "express" | "flask") => {
  const hooks = {
    nextjs: useNextjsHealth,
    express: useExpressHealth,
    flask: useFlaskHealth,
  };

  const query = hooks[service]();

  return {
    ...query,
    isHealthy: !query.isError && query.data?.status === "ok",
    status: query.isError ? "error" : query.isLoading ? "loading" : "success",
  };
};

import axios from "axios";

// Environment-based API base URLs
const API_BASE_URLS = {
  nextjs: process.env.NEXT_PUBLIC_NEXTJS_API_URL || "http://localhost:3002/api",
  express: process.env.NEXT_PUBLIC_EXPRESS_API_URL || "http://localhost:8080",
  flask: process.env.NEXT_PUBLIC_FLASK_API_URL || "http://localhost:8081",
} as const;

// Create Axios instances for each service
export const nextjsApi = axios.create({
  baseURL: API_BASE_URLS.nextjs,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const expressApi = axios.create({
  baseURL: API_BASE_URLS.express,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const flaskApi = axios.create({
  baseURL: API_BASE_URLS.flask,
  timeout: 15000, // Flask might be slower for ML operations
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptors for logging (development only)
if (process.env.NODE_ENV === "development") {
  [nextjsApi, expressApi, flaskApi].forEach((api, index) => {
    const serviceName = ["Next.js", "Express", "Flask"][index];

    api.interceptors.request.use(
      (config) => {
        console.log(
          `🚀 [${serviceName}] ${config.method?.toUpperCase()} ${config.url}`,
        );
        return config;
      },
      (error) => {
        console.error(`❌ [${serviceName}] Request Error:`, error);
        return Promise.reject(error);
      },
    );

    api.interceptors.response.use(
      (response) => {
        console.log(
          `✅ [${serviceName}] ${response.status} ${response.config.url}`,
        );
        return response;
      },
      (error) => {
        const status = error.response?.status || "Network Error";
        const url = error.config?.url || "Unknown URL";
        console.error(`❌ [${serviceName}] ${status} ${url}:`, error.message);
        return Promise.reject(error);
      },
    );
  });
}

// Export base URLs for use in components
export { API_BASE_URLS };

// Helper function to get the appropriate API instance
export const getApiInstance = (service: keyof typeof API_BASE_URLS) => {
  switch (service) {
    case "nextjs":
      return nextjsApi;
    case "express":
      return expressApi;
    case "flask":
      return flaskApi;
    default:
      throw new Error(`Unknown service: ${service}`);
  }
};

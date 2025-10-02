"use client";

import { Button } from "./ui/button";
import {
  useServiceStatus,
  useAllServicesHealth,
  useFlaskPrediction,
} from "@/lib/api-hooks";
import { useState } from "react";

// Modern Service Status Card Component
function ServiceStatusCard({
  service,
  title,
  description,
  icon,
}: {
  service: "nextjs" | "express" | "flask";
  title: string;
  description: string;
  icon: string;
}) {
  const { data, isLoading, isError, isHealthy, refetch } =
    useServiceStatus(service);

  const getStatusColor = () => {
    if (isLoading) return "bg-yellow-500";
    if (isHealthy) return "bg-green-500";
    return "bg-red-500";
  };

  const getStatusText = () => {
    if (isLoading) return "Checking...";
    if (isHealthy) return "Healthy";
    return "Error";
  };

  return (
    <div className="border border-border rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{icon}</div>
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className={`w-3 h-3 rounded-full ${getStatusColor()}`} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Status:</span>
          <span className={isHealthy ? "text-green-600" : "text-red-600"}>
            {getStatusText()}
          </span>
        </div>

        {data && (
          <>
            <div className="flex justify-between text-sm">
              <span>Service:</span>
              <span>{data.service || "Unknown"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Message:</span>
              <span className="text-right">{data.message}</span>
            </div>
            {data.timestamp && (
              <div className="flex justify-between text-sm">
                <span>Last Check:</span>
                <span>{new Date(data.timestamp).toLocaleTimeString()}</span>
              </div>
            )}
          </>
        )}

        {isError && (
          <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
            Connection failed - check if service is running
          </div>
        )}

        <Button
          onClick={() => refetch()}
          className={`w-full px-4 py-2 rounded border text-sm font-medium ${
            isLoading
              ? "bg-gray-200 text-gray-500 cursor-not-allowed border-gray-200"
              : "bg-white text-gray-900 hover:bg-gray-50 border-gray-300 hover:border-gray-400"
          }`}
          appName="webapp"
        >
          {isLoading ? "Testing..." : "Test Connection"}
        </Button>
      </div>
    </div>
  );
}

// Flask Prediction Test Component
function FlaskPredictionTest() {
  const [testData, setTestData] = useState('{"sample": "data"}');
  const mutation = useFlaskPrediction();

  const handleTest = async () => {
    try {
      const data = JSON.parse(testData);
      mutation.mutate({ data });
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  return (
    <div className="border border-border rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="text-2xl">🤖</div>
        <div>
          <h3 className="font-semibold text-lg">Flask ML Prediction</h3>
          <p className="text-sm text-muted-foreground">
            Test ML prediction endpoint
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Test Data (JSON):
          </label>
          <textarea
            value={testData}
            onChange={(e) => setTestData(e.target.value)}
            className="w-full p-2 border border-border rounded text-sm font-mono"
            rows={3}
            placeholder="Enter JSON data for prediction"
          />
        </div>

        <Button
          onClick={handleTest}
          className={`w-full px-4 py-2 rounded text-sm font-medium transition-colors ${
            mutation.isPending
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
          }`}
          appName="webapp"
        >
          {mutation.isPending ? "Processing..." : "Run Prediction"}
        </Button>

        {mutation.data && (
          <div className="bg-green-50 p-3 rounded text-sm">
            <h4 className="font-medium text-green-800 mb-2">
              Prediction Result:
            </h4>
            <pre className="text-green-700 overflow-x-auto">
              {JSON.stringify(mutation.data, null, 2)}
            </pre>
          </div>
        )}

        {mutation.error && (
          <div className="bg-red-50 p-3 rounded text-sm">
            <h4 className="font-medium text-red-800 mb-2">Error:</h4>
            <p className="text-red-700">{mutation.error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Overall System Status Component
function SystemOverview() {
  const { nextjs, express, flask, allLoading, allHealthy, anyError } =
    useAllServicesHealth();

  const getOverallStatus = () => {
    if (allLoading)
      return { text: "Checking Services...", color: "text-yellow-600" };
    if (allHealthy)
      return { text: "All Systems Operational", color: "text-green-600" };
    if (anyError) return { text: "Some Services Down", color: "text-red-600" };
    return { text: "Unknown Status", color: "text-gray-600" };
  };

  const overallStatus = getOverallStatus();

  return (
    <div className="border border-border rounded-lg p-6 bg-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">System Overview</h2>
          <p className="text-sm text-muted-foreground">
            Real-time service monitoring
          </p>
        </div>
        <div className={`font-medium ${overallStatus.color}`}>
          {overallStatus.text}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
          <div className="text-2xl">⚡</div>
          <div className="text-sm font-medium">Next.js API</div>
          <div
            className={`text-xs ${!nextjs.isError ? "text-green-600" : "text-red-600"}`}
          >
            {nextjs.isLoading
              ? "Checking..."
              : !nextjs.isError
                ? "Online"
                : "Offline"}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-2xl">🚀</div>
          <div className="text-sm font-medium">Express API</div>
          <div
            className={`text-xs ${!express.isError ? "text-green-600" : "text-red-600"}`}
          >
            {express.isLoading
              ? "Checking..."
              : !express.isError
                ? "Online"
                : "Offline"}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-2xl">🐍</div>
          <div className="text-sm font-medium">Flask ML</div>
          <div
            className={`text-xs ${!flask.isError ? "text-green-600" : "text-red-600"}`}
          >
            {flask.isLoading
              ? "Checking..."
              : !flask.isError
                ? "Online"
                : "Offline"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ServiceStatusCard, FlaskPredictionTest, SystemOverview };

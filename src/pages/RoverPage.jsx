// src/pages/RoverPage.jsx
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const RoverPage = () => {
  const roverData = {
    location: "Field A - Southern Karnataka",
    soilType: "Loamy",
    soilMoisture: "Moderate (30%)",
    soilPH: "6.8 (Neutral)",
    temperature: "28°C",
    humidity: "62%",
    lastUpdated: "2025-07-08 17:30 IST"
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="shadow-md dark:bg-zinc-900 dark:text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-300">
            🤖 Rover - Soil & Field Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-100 dark:bg-zinc-800 rounded p-4 space-y-2">
            <p><strong>📍 Location:</strong> {roverData.location}</p>
            <p><strong>🌱 Soil Type:</strong> {roverData.soilType}</p>
            <p><strong>💧 Soil Moisture:</strong> {roverData.soilMoisture}</p>
            <p><strong>🧪 Soil pH:</strong> {roverData.soilPH}</p>
            <p><strong>🌡️ Temperature:</strong> {roverData.temperature}</p>
            <p><strong>💦 Humidity:</strong> {roverData.humidity}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {roverData.lastUpdated}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoverPage;

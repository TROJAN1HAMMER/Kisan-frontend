// src/pages/WeatherPage.jsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Bengaluru");
  const [translatedText, setTranslatedText] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // Replace with your API key

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) throw new Error("City not found");

      setWeatherData(data);

      const message = `Today's weather in ${data.name}. Temperature is ${data.main.temp} degrees Celsius. Sky condition: ${data.weather[0].description}.`;
      // Speak English message first
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);

      // Then translate to Kannada and update UI
      const kannadaText = await translateToKannada(message);
      setTranslatedText(kannadaText);
    } catch (err) {
      console.error("Error:", err);
      alert("Error fetching weather or translating text.");
    }
  };

  const translateToKannada = async (text) => {
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_TRANSLATE_API_KEY,
        'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ from: 'en', to: 'kn', text })
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data?.trans || "Kannada translation failed";
    } catch (error) {
      console.error("Translation error:", error);
      return "Kannada translation failed";
    }
  };

return (
  <div className="max-w-xl mx-auto p-6">
    <Card className="shadow-md bg-white dark:bg-zinc-900 text-gray-900 dark:text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-300">
          ☁️ Weather Info
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
          />
          <Button onClick={getWeather}>Get Weather</Button>
        </div>

        {weatherData && (
          <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded space-y-2 text-gray-800 dark:text-gray-100">
            <p><strong>🌍 City:</strong> {weatherData.name}</p>
            <p><strong>🌡️ Temperature:</strong> {weatherData.main.temp}°C</p>
            <p><strong>☁️ Condition:</strong> {weatherData.weather[0].description}</p>
            <hr className="my-2 border-gray-300 dark:border-zinc-700" />
            <p className="text-green-800 dark:text-green-400 font-semibold">📢 Kannada Translation:</p>
            <p className="text-lg">{translatedText}</p>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
);
};

export default Weather;

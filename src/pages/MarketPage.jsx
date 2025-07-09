// src/pages/Market.jsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2 } from "lucide-react";

const Market = () => {
  const [crop, setCrop] = useState("tomato");
  const [language, setLanguage] = useState("en");
  const [queryType, setQueryType] = useState("price");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const LANGUAGES = {
    English: "en",
    Hindi: "hi",
    Telugu: "te",
    Marathi: "mr",
    Bengali: "bn"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    const params = new URLSearchParams({
      crop,
      query_type: queryType,
      lang: language
    });

    if (location) params.append("location", location);

    try {
      const res = await fetch(`http://localhost:8000/query?${params.toString()}`);
      const data = await res.json();

      if (res.ok && data.success) {
        setResponse(data.response);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🌾 Farmer Market Assistant</h1>
      <p className="mb-6 text-muted-foreground">
        Get real-time crop prices and market trends in your language
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Crop Name (e.g., Tomato)"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
        />

        <Select value={language} onValueChange={(val) => setLanguage(val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(LANGUAGES).map(([label, code]) => (
              <SelectItem key={code} value={code}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <RadioGroup value={queryType} onValueChange={setQueryType} className="flex gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price" id="price" />
            <label htmlFor="price">Current Price</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="trend" id="trend" />
            <label htmlFor="trend">Price Trend</label>
          </div>
        </RadioGroup>

        <Input
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Submit"}
        </Button>
      </form>

      {response && (
  <div className="mt-6 p-4 rounded shadow bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100">
    ✅ {response}
  </div>
)}

{error && (
  <div className="mt-6 p-4 rounded shadow bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100">
    ❌ {error}
  </div>
)}

    </div>
  );
};

export default Market;

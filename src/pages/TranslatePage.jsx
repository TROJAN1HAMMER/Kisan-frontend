// src/pages/TranslatePage.jsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TranslatePage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-800">🗣️ Translate Text</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            This tool will allow you to translate text between English and Kannada. Voice and AI enhancements coming soon.
          </p>
          <Textarea placeholder="Enter English text here..." rows={4} className="resize-none" />
          <Button disabled>🔁 Translate to Kannada (Coming Soon)</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TranslatePage;

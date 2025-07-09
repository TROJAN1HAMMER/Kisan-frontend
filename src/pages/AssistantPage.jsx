// src/pages/AssistantPage.jsx
import React from "react";

const AssistantPage = () => {
  return (
    <div className="min-h-screen p-4 max-w-5xl mx-auto text-center text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">🤖 Project KisanM Assistant</h1>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Chat with your AI farming assistant in Kannada or English. Ask anything about crops, market prices, or government schemes.
      </p>

      <div className="w-full h-[700px] rounded-xl overflow-hidden shadow-xl border dark:border-zinc-700">
        <iframe
          src="https://cdn.botpress.cloud/webchat/v3.1/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/08/18/20250708184541-OUAD7LKO.json"
          width="100%"
          height="100%"
          allow="microphone; camera"
          style={{ border: "none" }}
          title="Project KisanM Assistant"
        ></iframe>
      </div>
    </div>
  );
};

export default AssistantPage;

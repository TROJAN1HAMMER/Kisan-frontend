// src/pages/SchemesPage.jsx
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SchemesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-800">
            📜 Government Schemes for Farmers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="pmkisan">
              <AccordionTrigger>PM-KISAN</AccordionTrigger>
              <AccordionContent>
                <p><strong>What It Offers:</strong> ₹6,000/year (₹2,000 per installment) direct bank transfer</p>
                <p><strong>Purpose:</strong> Income support for seeds, fertilizer, and basic needs</p>
                <p><strong>Eligibility:</strong> Landholding farmers; excludes govt employees, professionals</p>
                <a
                  href="https://pmkisan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  Visit PM-KISAN Website
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pmfby">
              <AccordionTrigger>PMFBY (Pradhan Mantri Fasal Bima Yojana)</AccordionTrigger>
              <AccordionContent>
                <p><strong>What It Offers:</strong> Crop insurance against natural calamities, pests, diseases</p>
                <p><strong>Purpose:</strong> Stabilize income by covering crop failure risks</p>
                <p><strong>Eligibility:</strong> Subsidized premiums (~1–5%) depending on crop</p>
                <a
                  href="https://pmfby.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  Visit PMFBY Website
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pmksy">
              <AccordionTrigger>PMKSY (Pradhan Mantri Krishi Sinchayee Yojana)</AccordionTrigger>
              <AccordionContent>
                <p><strong>What It Offers:</strong> Subsidies for micro-irrigation (drip/sprinkler), assured water</p>
                <p><strong>Purpose:</strong> Reduce dependency on rainfall; promote water conservation</p>
                <p><strong>Eligibility:</strong> Small/marginal farmers; land and document proofs</p>
                <a
                  href="https://pmksy.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  Visit PMKSY Website
                </a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="enam">
              <AccordionTrigger>eNAM (National Agriculture Market)</AccordionTrigger>
              <AccordionContent>
                <p><strong>What It Offers:</strong> Digital mandi platform with real-time price discovery</p>
                <p><strong>Purpose:</strong> Transparent trade; better market access</p>
                <p><strong>Eligibility:</strong> Farmers with smartphone/internet access</p>
                <a
                  href="https://www.enam.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  Visit eNAM Website
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchemesPage;

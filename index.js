import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
    /*
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
    }
    */
  });
  console.log("Gemini saids: " + response.text);
}

await main();

console.log("hello, world!")
// import { GoogleGenAI } from "@google/genai";
// import dotenv from 'dotenv';

// dotenv.config();

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const question = "explain what is the AI in a few word"

async function main(question) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: question,
//     config: {
//       thinkingConfig: {
//         thinkingBudget: 0, // Disables thinking
//       },
//     }
//   });
//   console.log("Gemini saids: " + response.text);
  
//   return response.text
    return "AI is a computer program that can think and learn like a human.";
}

// await main();

const answer = "AI is a computer program that can think and learn like a human.";

export default answer;

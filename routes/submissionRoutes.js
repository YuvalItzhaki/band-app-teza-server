import express from "express";
import Submission from "../models/Submission.js";
import { analyzeText, isEven } from "../utils/helpers.js";
import { generateText, generateImage } from "../utils/llm.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  const { name, band, year, apiKey } = req.body;

  console.log("New submission received:", { name, band, year });

  const evenStatus = isEven(year);
  let generatedText = "";
  let generatedImageUrl = "";
  let stats = {};

  try {
    if (apiKey) {
      generatedText = await generateText(apiKey, band, year, name);
      generatedImageUrl = await generateImage(apiKey, band, year);
      stats = analyzeText(generatedText);
    } else {
      console.log("No API key provided — skipping LLM generation.");
    }

    const newSubmission = await Submission.create({
      name,
      band,
      year,
      isEven: evenStatus,
      generatedText,
      generatedImageUrl,
      stats,
    });

    res.json(newSubmission);
  } catch (err) {
    console.error("Error processing submission:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/latest", async (req, res) => {
  try {
    const latest = await Submission.findOne().sort({ createdAt: -1 }); // 👈 DESC sort
    if (!latest) return res.status(404).json({ message: "No data found" });
    res.json(latest);
  } catch (err) {
    console.error("Error fetching latest submission:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

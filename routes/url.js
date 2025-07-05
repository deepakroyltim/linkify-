import { Router } from "express";
import { nanoid } from "nanoid";
import Url from "../Model/Url.js";

const router = Router();
const baseUrl = process.env.BASE_URL || "http://localhost:5000";

router.get("/", (req, res) => {
  res.send("App is running");
});

router.post("/shorten", async (req, res) => {
  const { originalUrl, userId } = req.body;
  
  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required" });
  }
  
  const urlRegex = /^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  if (!urlRegex.test(originalUrl)) {
    return res.status(400).json({ error: "Invalid URL format" });
  }
  
  const shortCode = nanoid(6);

  try {
    await Url.create({
      originalUrl,
      shortCode,
      userId: userId || null,
      clicks: 0,
      type: "shortCode",
    });
    res.json({ success: true, originalUrl, newUrl: `${baseUrl}/${shortCode}` });
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/:code", async (req, res) => {
  const { code } = req.params;
  try {
    const url = await Url.findOneAndUpdate(
      { shortCode: code },
      { $inc: { clicks: 1 } },
      { new: true }
    );
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: "Url not found" });
    }
  } catch (error) {
    console.error("Error redirecting:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/user/:userId/links", async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch links from database where userId matches
    const userLinks = await Url.find({ userId });

    res.json({
      success: true,
      links: userLinks,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch links" });
  }
});

export default router;

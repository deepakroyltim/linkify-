import { Router } from "express";
import { nanoid } from "nanoid";
import Url from "../Model/Url.js";

const router = Router();
const baseUrl = process.env.BASE_URL || "http://localhost:5000";

router.get("/", (req, res) => {
  res.send("App is running");
});

// Should be a method and get the originalUrl from req.body
router.get("/shorten", async (req, res) => {
  const { originalUrl } = req.query; // req.body
  const shortCode = nanoid(6);

  try {
    await Url.create({ originalUrl, shortCode });
    res.json({ newUrl: `${baseUrl}/${shortCode}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/:code", async (req, res) => {
  const { code } = req.params;
  try {
    const url = await Url.findOne({ shortCode: code });
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: "Url not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;

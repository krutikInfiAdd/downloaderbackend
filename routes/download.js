const express = require("express");

const router = express.Router();

router.get("/download", async (req, res) => {
  const fileUrl = req.query.url;

  const response = await fetch(fileUrl);
  const buffer = await response.arrayBuffer();

  res.setHeader("Content-Disposition", "attachment; filename=file.mp4");
  res.setHeader("Content-Type", "application/octet-stream");

  res.send(Buffer.from(buffer));
});
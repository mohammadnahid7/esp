const express = require("express");
const app = express();
app.use(express.json());

let ledState = "off"; // default state

// --- GET endpoint: ESP fetches this ---
app.get("/status", (req, res) => {
  res.json({ state: ledState });
});

// --- POST endpoint: mobile app updates state ---
app.post("/status", (req, res) => {
  const { state } = req.body;
  if (state === "on" || state === "off") {
    ledState = state;
    console.log("LED State updated to:", ledState);
    res.json({ success: true, state: ledState });
  } else {
    res.status(400).json({ success: false, error: "Invalid state" });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
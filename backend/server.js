const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, "formData.json");

// Ensure JSON file exists
(async function initFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
})();

app.post("/save-data", async (req, res) => {
  try {
    const entry = { ...req.body, receivedAt: new Date().toISOString() };

    const raw = await fs.readFile(DATA_FILE, "utf8");
    const arr = JSON.parse(raw || "[]");
    arr.push(entry);

    await fs.writeFile(DATA_FILE, JSON.stringify(arr, null, 2), "utf8");

    res.json({ ok: true, message: "Saved" });
  } catch (err) {
    console.error("Save error:", err);
    res.status(500).json({ ok: false, error: "Failed to save" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

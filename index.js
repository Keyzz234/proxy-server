const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/proxy", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.json({ error: "Masukkan URL" });

  try {
    const r = await fetch(url);
    const data = await r.text();
    res.send(data);
  } catch (err) {
    res.json({ error: err.toString() });
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server jalan...")
);
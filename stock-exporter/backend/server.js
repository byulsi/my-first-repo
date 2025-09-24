// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/chart/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;
    const { period1, period2, interval } = req.query;
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;
    const response = await axios.get(url, {
      params: { interval, period1, period2 },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});

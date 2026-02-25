import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/youtube-suggest", async (req, res) => {
  
  const query = req.query.q;

  const response = await fetch(
    `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`,
  );

  const data = await response.json();
  res.json(data);
});

app.listen(5000, "192.168.0.101", () => {
  console.log("Server running on 192.168.0.101:5000");
});

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


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

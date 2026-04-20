const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const quotes = [
  "Az élet túl rövid ahhoz, hogy rossz bort igyunk.",
  "A siker titka az, hogy soha ne add fel.",
  "A tudás hatalom.",
  "A türelem rózsát terem.",
  "Aki mer, az nyer.",
  "Ha végeztem hazamehetek"
];

app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.listen(3000, () => {
  console.log(`Backend listening on port 3000`);
});

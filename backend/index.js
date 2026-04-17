const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const quotes = [
  "Az élet túl rövid ahhoz, hogy rossz bort igyunk.",
  "A siker titka az, hogy soha ne add fel.",
  "A tudás hatalom.",
  "A türelem rózsát terem.",
  "Aki mer, az nyer."
];

app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});

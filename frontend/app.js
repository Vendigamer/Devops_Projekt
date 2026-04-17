document.getElementById('get-quote').addEventListener('click', async () => {
  const quoteDiv = document.getElementById('quote');
  quoteDiv.textContent = 'Betöltés...';
  try {
    const response = await fetch('https://idezet-vargavendel.jcloud.jedlik.cloud/api/quote');
    const data = await response.json();
    quoteDiv.textContent = data.quote;
  } catch (err) {
    quoteDiv.textContent = 'Hiba történt az idézet lekérésekor.';
  }
});

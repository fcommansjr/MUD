const express = require('express');
const app = express();
const port = 3000;

// In-memory storage for M.U.D. requests (replace with a database in production)
const mudRequests = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the frontend files (index.html, styles.css, app.js)
app.use(express.static('public'));

// API endpoint to handle M.U.D. requests
app.post('/api/mud/request', (req, res) => {
  const { manufacturer, product } = req.body;

  // Generate a secure URL (for demonstration purposes, we'll use a random string)
  const secureUrl = generateRandomUrl();

  // Store the M.U.D. request in memory (replace with database storage in production)
  mudRequests.push({ manufacturer, product, secureUrl });

  // Send the secure URL back to the client
  res.json({ secureUrl });
});

function generateRandomUrl() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let url = '';
  for (let i = 0; i < 10; i++) {
    url += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `https://secure-mud-url.com/${url}`;
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

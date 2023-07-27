document.getElementById('mudRequestForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const manufacturer = document.getElementById('manufacturer').value;
  const product = document.getElementById('product').value;
  
  // You can implement your own logic here to generate the secure URL for M.U.D.

  // For demonstration purposes, let's assume we generate a random URL
  const secureUrl = generateRandomUrl();

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p><strong>Secure URL for M.U.D.:</strong></p>
    <p>${secureUrl}</p>
  `;
});

function generateRandomUrl() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let url = '';
  for (let i = 0; i < 10; i++) {
    url += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `https://secure-mud-url.com/${url}`;
}

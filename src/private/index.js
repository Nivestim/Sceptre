// app.js

const express = require('express');
const app = express();
const port = 8080;
const path = require("path")


// Serve static files from the "../public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Set up a basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

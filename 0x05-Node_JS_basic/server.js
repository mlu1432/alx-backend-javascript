// server.js
const app = require('./5-http');

/**
 * Start the server on port 1245.
 * The server listens for incoming requests and processes them accordingly.
 */
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

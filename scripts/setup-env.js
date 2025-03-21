const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Generate random keys
const generateRandomKey = () => crypto.randomBytes(16).toString('base64');

// Create .env file with necessary variables
const envContent = `HOST=0.0.0.0
PORT=1337
APP_KEYS=${generateRandomKey()},${generateRandomKey()},${generateRandomKey()},${generateRandomKey()}
API_TOKEN_SALT=${generateRandomKey()}
ADMIN_JWT_SECRET=${generateRandomKey()}
TRANSFER_TOKEN_SALT=${generateRandomKey()}
JWT_SECRET=${generateRandomKey()}
`;

// Write to .env file
const envPath = path.join(__dirname, '..', '.env');
fs.writeFileSync(envPath, envContent);

console.log('Environment variables have been set up successfully!');
console.log('You can now run "npm run develop" to start the Strapi server.');

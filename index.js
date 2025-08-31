// api/motor.js - Ultra simple Vercel serverless function

let motorOn = false;

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle POST - Update motor status
  if (req.method === 'POST' && req.body && req.body.s !== undefined) {
    motorOn = req.body.s; // s = status (true/false or 1/0)
  }
  
  // Always return status
  res.json({ s: motorOn });
}

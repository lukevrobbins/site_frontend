// routes/api.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  try {
    // Your Azure OpenAI endpoint and API key should be stored in environment variables.
    const azureEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const apiKey = process.env.AZURE_OPENAI_API_KEY;

    // Set up the payload for the Azure OpenAI request.
    const payload = {
        messages: [
          { role: "system", 
            content: [
              { type: "text", text: "You are an AI assistant that helps people find information." }
            ]
          },
          { role: "user", 
            content: [
              { type: "text", text: prompt }
            ]
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      };

    // Call the Azure OpenAI endpoint
    const response = await axios.post(azureEndpoint, payload, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      }
    });

    // Assuming Azure returns a "choices" array with the generated text
    const reply = response.data.choices && response.data.choices[0].message.content;
    res.json({ reply: reply ? reply.trim() : "No reply" });
  } catch (error) {
    console.error("Error calling Azure OpenAI:", error);
    res.status(500).json({ error: "Failed to get response from Azure OpenAI" });
  }
});

module.exports = router;

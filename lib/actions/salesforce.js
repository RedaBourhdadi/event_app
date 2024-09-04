// pages/api/salesforce.js
import { Client } from "jsforce";
import { config } from "dotenv";

config(); // Load environment variables

export default async function handler(req, res) {
  if (req.method === "POST") {
    const conn = new Client({
      loginUrl: process.env.SALESFORCE_LOGIN_URL,
    });

    try {
      await conn.login(
        process.env.SALESFORCE_USERNAME,
        process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_TOKEN
      );

      const { query } = req.body; // Assuming you send a SOQL query in the request body
      const result = await conn.query(query);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

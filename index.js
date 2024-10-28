import express from "express";
import "dotenv/config";
import cors from "cors";
import corsOptions from "./config/corsoption.js";

import verifySignature from "./middleware/verifySignature.js";
import preventReplayAttack from "./middleware/preventReplayAttack.js";
import signRequest from "./helpers/signRequest.js";
const app = express();

app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/webhook", signRequest, verifySignature, preventReplayAttack,   (req, res) => {
  res.status(200).send("Webhook received successfully");
  console.log(req.headers)

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





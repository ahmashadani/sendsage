import express from "express";
const app = express();
app.use(express.json());
app.get("/health", (_, res) => res.send("API OK"));
app.listen(3001, () => console.log("API running on http://localhost:3001"));
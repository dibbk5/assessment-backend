const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getAllFortunes,
  createFortune,
  deleteFortune,
} = require("./controller");

app.get("/api/fortune", getAllFortunes);
app.get("/api/compliment", getCompliment);
app.get("/api/random", getFortune);
app.post("/api/fortune", createFortune);
app.delete("/api/fortune/:id", deleteFortune);

app.listen(4000, () => console.log("Server running on 4000"));

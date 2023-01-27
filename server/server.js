import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

// Health Route Checking
app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Health Route Working!",
  });
});

app.post("/gpt-3", (req, res) => {
  const prompt = req.body.prompt;

  console.log(prompt);

  axios
    .post("https://api.openai.com/v1/engines/davinci/completions", prompt, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    })
    .then((response) => {
      // handle the response data
      const result = response.data.choices[0].text;
      res.json({ result: result });
    })
    .catch((error) => {
      // handle the error
      res.status(500).json({ error: error });
    });
});

app.listen(PORT, () => console.log(`AI server started on ${PORT}`));

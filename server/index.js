const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;
const key = "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";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-gLRCLaxCaoWCjIqrA9uHHu5Z",
  apiKey: key,
});
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const prompt = req.body.message;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    max_tokens: 200,
    temperature: 0.5,
  });

  res.json({
    data: response.data.choices[0].text,
  });
});

app.listen(PORT, () => {
  console.log("Server Connected Port", PORT);
});

import React, { useState } from "react";
import ChatStripe from "./utils/ChatStripe";
import axios from "axios";

const Askme = () => {
  const [prompts, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prompt = {
      prompt: prompts,
      temperature: 0.5,
      max_tokens: 10,
      stop: "Paris",
      engine: "text-davinci-003",
    };

    axios
      .post("https://api.openai.com/v1/engines/davinci/completions", prompt, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      })
      .then((response) => {
        // handle the response data
        const result = response.data.choices[0].text;
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.reset();
  };

  return (
    <div className=" relative h-full ">
      <div>
        <ChatStripe />
      </div>

      <form onSubmit={handleSubmit} className=" absolute bottom-0 w-full ">
        <div className="flex   items-center">
          <input
            placeholder="ask codex..."
            className="w-full px-2 placeholder:text-white outline-none text-white py-2"
            type="text"
            name="prompt"
            onChange={(event) => setPrompt(event.target.value)}
          />
          <button
            className="bg-blue-500 text-black px-4 py-2 hover:bg-blue-600"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Askme;

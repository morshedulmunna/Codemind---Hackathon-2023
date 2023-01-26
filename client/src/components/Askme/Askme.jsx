import React, { useState } from "react";
import ChatStripe from "./utils/ChatStripe";

const Askme = () => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(prompt);

    const response = await fetch(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      }
    );

    console.log(response);

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

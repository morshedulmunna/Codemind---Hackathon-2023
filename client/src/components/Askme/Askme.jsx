import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
const Askme = () => {
  const [prompts, setPrompt] = useState("");

  const [chatLog, setChatLog] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    setChatLog([{ user: "me", message: `${prompts}` }]);

    try {
      const response = await fetch("http://localhost:3080/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompts,
        }),
      });
      const data = await response.json();
      console.log(data.message);
      setChatLog([{ user: "gpt", message: `${data.message}` }]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" relative h-full ">
      <div>
        {chatLog.map((msg, index) => (
          <ChatMessage message={msg} key={index} />
        ))}
      </div>

      <form onSubmit={handleSubmit} className=" absolute bottom-0 w-full ">
        <div className="flex   items-center">
          <input
            placeholder="Ask codex..."
            className="w-full bg-blue-300 px-2 placeholder:text-white outline-none text-black py-2"
            type="text"
            name="prompt"
            onChange={(event) => setPrompt(event.target.value)}
          />
          <button className="bg-blue-300 text-black px-4 py-2 " type="submit">
            <BiSend size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Askme;

const ChatMessage = ({ message }) => {
  console.log(message.message);

  return (
    <>
      <div className="text-black p-2">
        <div> {message.message} </div>
      </div>
    </>
  );
};

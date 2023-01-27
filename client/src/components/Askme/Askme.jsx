import React, { useState } from "react";

const Askme = () => {
  const [prompts, setPrompt] = useState("");
  const [chatlog, setChatlog] = useState([
    {
      user: null,
      message: prompts,
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setChatlog([...chatlog, { user: "me", message: `${prompts}` }]);
    setPrompt("");

    const response = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: prompts,
      }),
    });

    const data = await response.json();

    if (!data) {
      return <div>loading...</div>;
    }

    setChatlog([...chatlog, { user: "gpt", message: `${data.data}` }]);

    e.target.reset();
  };

  return (
    <div className=" relative h-full ">
      <div className=" overflow-y-scroll ">
        {chatlog.map((item, index) => (
          <div key={index}>
            <div className="bg-gray-700 space-x-4">
              <span> {item.user} :</span>
              <span>{item.message}</span>
            </div>
          </div>
        ))}
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

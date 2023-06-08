import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Chatbot = () => {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const prompt = "You are talking to an elderly person. Talk with respect. Do not mention you are an AI. ";

  var [textInput, setTextInput] = useState(""); // State to hold the input value
  var a="";

  const generateChatResponse = async () => {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt + textInput }],
    });
    a = completion.data.choices[0].message;
  };

  const handleInputChange = (e) => {
    setTextInput(e.target.value); // Update the input value as the user types
  };

  return (
    <div className="header-wraper" style={{ background: "radial-gradient(50% 50% at 50% 50%, #DAAC78 0%, rgba(218, 172, 120, 0) 100%)" }}>
      <div className="card-control" style={{ "padding-top": "3rem" }}>
        <input id="text-desired1" type="text" style={{ height: "5rem" }} value={textInput} onChange={handleInputChange} />
        <button onClick={generateChatResponse}>Submit</button>
        <input id="text-desired1" type="text" style={{ height: "5rem" }} placeholder={a} />
      </div>
    </div>
  );
};

export default Chatbot;

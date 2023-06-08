import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Chatbot = () => {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const prompt = "You are talking to an elderly person. Talk with respect. Do not mention you are an AI.";

  const [textInput, setTextInput] = useState(""); // State to hold the input value
  const [response, setResponse] = useState(""); // State to hold the generated response

  const generateChatResponse = async () => {
    const messages = [{ role: "user", content: prompt + textInput }];

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages.map((message) => ({
        role: message.role,
        content: message.content
      })),
    });

    const generatedMessages = completion.data.choices.map((choice) => choice.message.content);
    const response = generatedMessages.join("\n"); // Join the messages with a newline character

    console.log(response); // Log the generated response to the console
    setResponse(response); // Store the generated response in the state variable
  };

  const handleInputChange = (e) => {
    setTextInput(e.target.value); // Update the input value as the user types
  };

  return (
    <div className="header-wraper" style={{ background: "radial-gradient(50% 50% at 50% 50%, #DAAC78 0%, rgba(218, 172, 120, 0) 100%)" }}>
      <div className="card-control" style={{ paddingTop: "3rem" }}>
        <input id="text-desired1" type="text" style={{ height: "5rem" }} value={textInput} onChange={handleInputChange} />
        <button onClick={generateChatResponse}>Submit</button>
      </div>
      <p>{response}</p> {/* Render the generated response */}
    </div>
  );
};

export default Chatbot;

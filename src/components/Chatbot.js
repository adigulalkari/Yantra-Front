import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { MDBTextArea } from 'mdb-react-ui-kit';

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
    return <h1>completion.data.choices[0].message</h1> ;
  };

  const handleInputChange = (e) => {
    setTextInput(e.target.value); // Update the input value as the user types
    // console.log(e.target.value);
  };

  return (
    <div className="header-wraper" style={{ background: "radial-gradient(50% 50% at 50% 50%, #DAAC78 0%, rgba(218, 172, 120, 0) 100%)","padding-top":"20%" }}>
      <div className="card-control" style={{ "padding-top": "3rem" }}>
        {/* <input id="text-desired1" type="text" style={{ height: "5rem" }} value={textInput} onChange={handleInputChange} /> */}



        <MDBTextArea label='Message' id='textAreaExample' rows={4} />

        <button class="btn btn-dark btn-block mb-2" onClick={generateChatResponse}>Submit</button>
        <MDBTextArea label='Message' id='textAreaExample' rows={4} />
        {/* <input id="text-desired1" type="text" style={{ height: "5rem" }} placeholder={a} /> */}
      </div>
    </div>
  );
};

export default Chatbot;

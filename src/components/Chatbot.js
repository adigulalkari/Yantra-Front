import React from "react";
import Navbar from "../components/Navbar"

const Header=()=>{
    
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
    apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    prompt = "You are talking to an elderly person. Talk with respect. Do not mention you are an AI. "

    async function generateChatResponse(msg) {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt+msg }],
        });
        return completion.data.choices[0].message;
      }

    return (
        <div className="header-wraper">
            <Navbar/>
            <div className="main-info">
                <h1>Elderly people Help</h1>
                <a href="#" className="btn-main-offer" style={{"text-decoration":"none"}}>Contact</a>
            </div>
        </div>
    );
}

export default Header


generateChatResponse(msg);

import React from "react";
import Navbar from "../components/Navbar"


const Chatbot=()=>{
    
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
            <div className="header-wraper" style={{"background": "radial-gradient(50% 50% at 50% 50%, #DAAC78 0%, rgba(218, 172, 120, 0) 100%)"}}>
            <div className="card-control" style={{"padding-top":"3rem"}}>
            {/* <img className="card-img-top" src={land1} alt="Card image cap" style={{"height":"40rem"}}/> */}
            <input id="text-desired1" type="text" style={{"height":"5rem"}}/>
            <button onSubmit={generateChatResponse(document.querySelector('input').value)}/>
            </div>
            {/* <img className="card-img-top" src={land22} alt="Card image cap" style={{"height":"40rem"}}/> */}
            </div>
            
    );
}

export default Chatbot


// generateChatResponse(msg);

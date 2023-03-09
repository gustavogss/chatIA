const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

module.exports = class openai{
    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });
        return new OpenAIApi(configuration);
    }

    static textCompletion({prompt}){
        return {                        
                model: "text-davinci-003", //nome_do_algoritmo
                prompt: `${prompt}`,
                temperature: 0.9,
                max_tokens: 150,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0.6,
                stop: [" Human:", " AI:"],            
        }
    }
}

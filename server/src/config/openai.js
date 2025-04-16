const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = {
  async chatCompletion(prompt) {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 3500,
      temperature: 0,
    });

    return response.choices[0].message.content;
  },
};

//   static async createCompletion(prompt) {
//     const client = this.client();
//     const completionParams = this.textCompletion({ prompt });
//     const response = await client.completions.create(completionParams);
//     return response.choices[0].text;
//   }
// };

// const { Configuration, OpenAIApi } = require("openai")

// module.exports = class openai {
//     static configuration() {
//         const configuration = new Configuration({
//             apiKey: process.env.OPEAI_API_KEY,
//         });

//         return new OpenAIApi(configuration)
//     }

//     static textCompletion({ prompt }) {

//         return {
//             model: "text-davinci-003", // Modelo que você quer usar
//             prompt: `${prompt}`,
//             max_tokens: 3500, // Número máximo de tokens na resposta
//             temperature: 0, // Criatividade da resposta
//             top_p: 1,
//             frequency_penalty: 0.5,
//             presence_penalty: 0
//         }
//     }
// }
    

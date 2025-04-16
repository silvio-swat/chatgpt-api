

const openai = require("../config/openai");

module.exports = {
  async sentText(req, res) {
    const { prompt } = req.body;

    try {
      const response = await openai.chatCompletion(prompt);

      return res.status(200).json({
        success: true,
        data: response,
      });
    } catch (error) {
      console.error("Erro na OpenAI:", error); // Adicione esse log pro terminal
      return res.status(500).json({
        success: false,
        error: error.error
          ? `Ocorreu um erro: ${JSON.stringify(error.error.message)}`
          : 'Houve um problema no servidor',
      });
    }
  },

//   const openai = require("../config/openai")
//   const InputPrompt = require("../models/input")  

    // async sentText(req, res) {
    //     const { prompt } = req.body;
    
    //     try {
    //       const response = await openai.chat.completions.create({
    //         model: 'gpt-3.5-turbo',
    //         messages: [{ role: 'user', content: prompt }],
    //         max_tokens: 3500,
    //         temperature: 0,
    //       });
    
    //       return res.status(200).json({
    //         success: true,
    //         data: response.choices[0].message.content,
    //       });
    //     } catch (error) {
    //       return res.status(500).json({
    //         success: false,
    //         error: error.response
    //           ? `Ocorreu um erro: ${error.response.data}`
    //           : 'Houve um problema no servidor',
    //       });
    //     }
    //   },    
}
const openai = require('../config/openai');
const InputPrompt = require('../model/input-model');

module.exports = {
    async sendText(req, res) {
        const openaiAPI = openai.configuration();
        const inputModel = new InputPrompt(req.body);
        try {
            const result = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
            );
            return res.status(200).json({
                sucess: true,
                data: result.data.choices[0].text
            });
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                error: error.result ? error.result.data : "Error Server"
            });
        }
        
}
};
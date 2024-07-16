const knex = require('../services/db');


const getAllNotes = async (req, res) => {

    try {
        const notes = await knex('notes');
        
        return res.status(200).json(notes);
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do servidor!'});
    };

};

module.exports = {
    getAllNotes
}
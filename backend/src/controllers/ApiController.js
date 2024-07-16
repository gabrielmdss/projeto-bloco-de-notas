const knex = require('../services/db');

const getAllNotes = async (req, res) => {
    try {
        const notes = await knex('notes').returning('*');
        return res.status(200).json(notes);
    } catch (error) {
        console.error('Erro ao buscar todas as notas:', error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor ao buscar notas.' });
    }
};

const getNoteById = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await knex('notes').select('*').where('id', id).first();

        if (!note) {
            return res.status(404).json({ mensagem: 'Nota não encontrada!' });
        }

        return res.status(200).json(note);
    } catch (error) {
        console.error('Erro ao buscar nota por id:', error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor ao buscar nota.' });
    }
}

const createNote = async (req, res) => {
    const { user_id, titulo, descricao,  conteudo } = req.body;

    try {
       const newNote = await knex('notes').insert({
          user_id,
          descricao,
          titulo,
          conteudo
       }).returning('*');
 
       return res.status(201).json(newNote);
    } catch (error) {
       return res.status(500).json({ mensagem: error.message });
    }
};

const updateNote = async (req,res) => {
    const { id } = req.params;
    const {user_id, descricao,  titulo, conteudo } = req.body;
    try {
        let noteUpdated = await knex('notes').select('*').where('id', id).first();

        if (!noteUpdated) {
            return res.status(404).json({ mensagem: 'Nota não encontrada!' });
        }

         noteUpdated = await knex('notes').update({
            user_id,
            descricao,
            titulo,
            conteudo
         }).where('id', id).returning('*');

        return res.status(200).json(noteUpdated);
    } catch (error) {
        console.error('Erro ao buscar nota por id:', error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor ao atulizar nota.' });
    }
};

const deleteNote = async (req,res) => {
    const {id} = req.params;

    try {
        const noteFound = await knex('notes').where('id', id).first();
        
        if (!noteFound) {
            return res.status(404).json({mensagem: "Nota não encontrado!"});
        };

        const deletedNote = await knex('notes').where('id', id).del().returning('*');

        if (!deletedNote) {
            return res.status(400).json({mensagem: "Não foi possível excluir a nota!"});
        };

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do servidor!'});
    }

};



module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};

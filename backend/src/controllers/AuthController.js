const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const senhaJwt = require('../services/passwordJwt');
const knex = require('../services/db');

const registerUser = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const emailExiste = await knex('users').where('email', email).first();

    if (emailExiste) {
        return res.status(400).json({ mensagem: 'Já existe um usuário cadastrado com o e-mail informado!' });
    };

    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = await knex('users').insert({nome, email, senha: senhaHash}).returning('*');

    const {senha: _, ...usuarioCadastrado} = novoUsuario[0];

    return res.status(201).json(usuarioCadastrado);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' });
    };
};

const loginUser = async (req,res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await knex('users').where('email', email).first();

        if (!usuario) {
            return res.status(400).json({ mensagem: 'Usuário e/ou senha inválido(s)!' });
        };

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(400).json({ mensagem: 'Usuário e/ou senha inválido(s)!'});
        };

        const token = jwt.sign({ id: usuario.id }, senhaJwt, { expiresIn: '8h' });

        const { senha: _, ...usuarioLogado } = usuario;

        return res.status(200).json({ usuario: usuarioLogado, token });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor!' });

    }
};

module.exports =  {
     loginUser,
     registerUser

}
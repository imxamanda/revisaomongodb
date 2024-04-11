

const { json } = require("express")
const Revisao = require("../models/Revisao")

const RevisaoController = {
    getAll: async (req, res) => {
        res.json( await Revisao.find())
    },
    get: async (req, res) => {

        try {
           const {nome, turma, notas} = req.body;
           
           const media = notas.reduce((acc, nota ) => acc + nota, 0) / notas.length;

           const alunoData = {
            nome,
            turma,
            notas,
            media
           };

           const aluno = await Aluno.create(alunoData);

           res.status(200).json({ mensagem: 'Aluno registrado com sucesso!', aluno, media})
        } catch (error) {
            res.status(500).json({error: 'Erro! Aluno não salvo'})
        }

    },
    create: async (req, res) => {
        try {
            res.json( await Revisao.create(req.body))
        } catch (error) {
            res.status(400).json({error})
        }
    },
    update: async (req, res) => {
        try {
            res.json( await Revisao.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    delete: async (req, res) => {

        try {
            res.json( await Revisao.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
}

module.exports = RevisaoController
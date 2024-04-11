

const { json } = require("express")
const Revisao = require("../models/Revisao")

const RevisaoController = {
    getAll: async (req, res) => {
        res.json( await Revisao.find())
    },
    get: async (req, res) => {

        try {
            res.json( await Revisao.findById(req.params.id ))  
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
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
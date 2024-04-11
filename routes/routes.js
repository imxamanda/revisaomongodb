const express = require('express');
const router = express.Router();

const RevisaoController = require('../controllers/RevisaoController');
const Revisao = require('../models/Revisao');

router.get('/', function(req, res){
    res.json({})
})

router.get('/revisao', (req, res) => RevisaoController.getAll(req, res))
router.post('/revisao', (req, res) => RevisaoController.create(req, res))
router.get('/revisao:id', (req, res) => RevisaoController.get(req, res))
router.put('/revisao:id', (req, res) => RevisaoController.update(req, res))
router.delete('/revisao:id', (req, res) => RevisaoController.delete(req, res))

module.exports = router
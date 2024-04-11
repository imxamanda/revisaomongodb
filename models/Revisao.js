const mongoose =  require('mongoose');

const revisaoSchema = mongoose.Schema({
    nome:{
        type: String,
        trim: true,
        minLength: 3,
        match: /^[a-zA-ZÀ-ú\s'-]+$/,
        required: true,
    },
    turma:{
        type: String,
        match: /^[a-zA-Z0-9À-ú\s.,#-]+$/,
        required: true
    },
    nota: []
})

const Revisao = mongoose.model(`Revisao`, revisaoSchema)

module.exports = Revisao

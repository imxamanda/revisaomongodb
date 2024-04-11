const mongoose = require('mongoose')

async function main(){

    try {
        await mongoose.connect(`mongodb+srv://${process.env.LOGIN}:${process.env.SENHA}@cluster0.t3uxlhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    console.log('Banco Ok');
        
    } catch (error) {
        console.log('Erro: ' + error);
    }
   
}

module.exports = main
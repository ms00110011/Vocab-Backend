const wordModel = require('../Model/Word')


async function AddWord(req,res,next) {

    let wordDetails = req.body

    const response = await wordModel.insertMany([wordDetails]);



}

module.exports = {
    AddWord
}
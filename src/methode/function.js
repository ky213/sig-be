const SchemasModel = require("../model/SchemasModel");

func = () => {
    console.log('----------------------func-------->');
}

alreadyExist = async (fieled, value) => {
    let wer = {}
    wer[fieled] = value
    console.log('----------------------wer-------->', wer);
    const count = await SchemasModel.find(wer).count();
    console.log('----------------------count-------->', count);
    let rep = false;
    count == 0 ? rep = false : rep = true;
    return rep
}






module.exports = { alreadyExist, func }
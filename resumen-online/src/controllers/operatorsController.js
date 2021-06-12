var operatorsController = {
    index:(req,res)=>{
        res.render('operators', {style:'style', title:'Operators'})
    }
}

module.exports = operatorsController
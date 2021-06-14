var falsyController = {

    index:(req,res)=>{
        res.render('falsy',{style:'style', title:'Falsy Values'})
    }
}
module.exports = falsyController;
var stringsController = {
    index:(req,res)=>{
        res.render('strings', {style:'style', title:'Strings'})
    }
}

module.exports = stringsController
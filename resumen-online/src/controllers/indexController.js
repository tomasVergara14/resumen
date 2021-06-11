

var indexController = {
    index:
        function(req, res, next) {
            res.render('index', { title: '', style:'style' });
          }
    
}

module.exports = indexController
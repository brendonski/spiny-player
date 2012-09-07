var articleProvider = require('../articleprovider-memory').ArticleProvider;
var articleProvider= new ArticleProvider();

exports.list = function(req, res){
   articleProvider.findAll( function(error,docs){
//        res.render('index.jade', { locals: {
//            title: 'Blog',
//            articles:docs
//            }
//        });
        
        
        res.render('index.jade', {
            title: 'Blog', 
            articles:docs
        });
        
        
        
   })
};

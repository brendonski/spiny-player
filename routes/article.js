var articleProvider = require('../articleprovider-memory').ArticleProvider;
var articleProvider= new ArticleProvider();
var fs = require('fs');

exports.list = function(req, res){

fs.readdir('.', function (err, files) {
 if (err)
    throw err;
 for (var index in files) {
    console.log(files[index]);
 }
 });



   articleProvider.findAll( function(error,docs){
        
		console.log(docs);
        
        res.render('articles.jade', {
            title: 'Blog', 
            articles:docs
        });
        
        
        
   })
};

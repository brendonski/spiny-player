var fs = require('fs');

exports.list = function(req, res){

  fs.readdir('.', function (err, files) {
    if (err)
        throw err;
	
	res.render('tracks.jade', {
            title: 'Tracks', 
            tracks:files
    });
	
    for (var index in files) {
      console.log(files[index]);
    }
  });

};

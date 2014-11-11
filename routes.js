'use strict';
var fs = require('fs');

module.exports = function (app) {

  app.post('/api/write/:id', function (req, res) {
    var filepath = __dirname + '/public/' + req.params.id + '.txt';
    var body = JSON.stringify(req.body);

    fs.writeFile(filepath, body, function (err) {
      if (err){return res.status(500).send('there was an error');}
      console.log('saved success');
    });
    res.end();
  });

  app.get('/api/read/:id', function (req, res) {
    var filepath = __dirname + '/public/' + req.params.id + '.txt';
    var filename = req.params.id + '.txt';
    console.log('filename: filename');

    fs.readFile(filepath, 'utf8', function (err, data) {
      if (err){return res.status(500).send('there was an error');}
      // data is the contents of the file.
      res.send(data);

      console.log('idfile info returned');
    })
  });
};

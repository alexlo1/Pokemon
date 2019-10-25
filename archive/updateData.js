var fs = require('fs');
var https = require('https');

https.get('https://pokeapi.co/api/v2/pokemon/1', (req) => {
  let res = "";
  req.setEncoding('utf8');

  req.on('data', (data) => {res += data; console.log(data)});
  req.on('error', console.error);
  req.on('end', () => {
    fs.writeFile("data", res, (err) => {
      if(err) return console.log(err);
      console.log("File saved!");
    });
  });
});

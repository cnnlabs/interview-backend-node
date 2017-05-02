var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var command= "curl http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json | ./node_modules/.bin/jq '.zoneContents[]| select(.type ==\"container\") | select(.title ==\"Top stories\" )|.containerContents[].cardContents | {url:.url, headline:.headlinePlainText, imageUrl:.media.elementContents.cuts.full16x9.uri, byLine:.auxiliaryText}'" ; 

var runCommand=function(command){
    exec(command, function (stderr, stdout) {
      console.log(stdout);
    });
};

var sendRunCommand=new Promise(function(resolve){
    var res=execSync(command);
    resolve(res);
});

exports.run=runCommand(command);

exports.json=function(req,res,next){
    
    sendRunCommand.then(function(data){
        res.send(data.toString());
    });         
}; 
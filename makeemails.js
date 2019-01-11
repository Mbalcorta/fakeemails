const fs = require('fs');

const Json2csvParser = require('json2csv').Parser;
const fields = ['first_name', 'last_name', 'email'];
const allEmails = [];

for(var i = 1; i < 5001; i++){
  allEmails.push({'first_name': i.toString() , 'last_name': 'Test', 'email': 'putinwhatever'+i+'@mailinator.com'})
}

const json2csvParser = new Json2csvParser({ fields });
const csv = json2csvParser.parse(allEmails);

fs.writeFile("./fakeEmails.csv", csv, function(err) {
  if(err) {
      return console.log(err);
  }

  console.log("The file was saved!");
}); 

 

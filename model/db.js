const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
 // await mongoose.connect('mongodb://127.0.0.1:27017/EmployeDB');
  
   await mongoose.connect('url',{useNewUrlParser: true}); 
   mongoose.set("strictQuery", true);
}
require('./employee.model')

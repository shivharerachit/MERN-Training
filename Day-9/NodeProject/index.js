var figlet = require("figlet");

figlet("Rachit Shivhare", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// let f =require('./f1')
// f(7,8);
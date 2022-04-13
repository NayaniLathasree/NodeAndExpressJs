const fs = require("fs");
console.log("Program started");
//at a time we can either read or write data 
const writeData = () => {
  fs.writeFile("view/view.txt", "Welcome to nodejs", (fileErr) => {
    if (fileErr) {
      console.log("File err", fileErr);
    } else {
      console.log("data Written successfully");
      fs.readFile("view/view.txt", (err, data) => {
        if (err) {
          console.log("err", err);
        } else {
          console.log(data.toString());
        }
      });
    }
  });
};

  fs.exists("view", (exists) => {
    if (!exists) {
      fs.mkdir("view", (err) => {
        if (err) {
          console.log("the floder is not created", err);
        } else {
          console.log("the floder is created sucessfully");
          writeData();
        }
      });
    } else {
      writeData();
    }
  });

  console.log("program ended");
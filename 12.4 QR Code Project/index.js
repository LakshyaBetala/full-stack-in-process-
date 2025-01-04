/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Type in the url:",
        name : "URL",
    },
  ])
  .then((answers) => { 
   var qr_svg = qr.image(answers.URL, { type: 'png' });
   qr_svg.pipe(fs.createWriteStream('qr-image2.png'));

   fs.writeFile("URL2.txt", answers.URL, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("error environemnt incorrect");
      

    } else {
      console.log("error in code"+error);
    }
  });
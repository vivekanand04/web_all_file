import inquirer from "inquirer";
import qr from "qr-image";//we have imported file from qr-code with name qr which will used in... var qr_svg = qr.image(myurl2,);
import fs from "fs";
inquirer
  .prompt([
    {
      message: "write down url:  ",/* Pass your questions in here */
      name: "myurl",
    },

  ])
  .then((answers) => {
    //  console.log(answers);  /* its print name:"www.google.com" if u have written url is www.google.com it means url written is stored  
    //  inside myurl*/
    const myurl2 = answers.myurl//i have stored content of myurl into myurl2


    // now code of kuta (step 2)
    //var qr = require('qr-image');//its not necesaary bcz i have  imported resources using import 

    var qr_svg = qr.image(myurl2);//here i have not used type becouse we are using defaoult mode(give png quality qr code )

    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
  //step3 code 
    fs.writeFile('message.txt', myurl2, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

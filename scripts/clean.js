const { unlinkSync, readdirSync } = require('fs');

let main = async () => {
    // await copyFile();
    try{
    let files = readdirSync('lib');
    files.forEach((item) => {
        if(item.match(".node")){
            console.log(item);
            unlinkSync(`lib/${item}`);
        }
    });
     } catch (err) {
         console.log('No more files to clean!');
     }
 };
 main();
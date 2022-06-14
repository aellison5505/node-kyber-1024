#npm i node-addon-api cmake-js
mkdir scripts
touch scripts/clean.js
touch scripts/move.js
npx npmAddScript -k "preinstall" -v "npm run cmake-clean"
npx npmAddScript -k "install" -v "npm run cmake-compile"
npx npmAddScript -k "postinstall" -v "npm run test"
npx npmAddScript -k "cmake-clean" -v "npx cmake-js clean && node scripts/clean.js"
npx npmAddScript -k "cmake-compile" -v "npx cmake-js compile && node scripts/move.js"
cat << EOT >> scripts/clean.js
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
EOT
cat << EOT >> scripts/move.js
const { copyFileSync, readdirSync, existsSync, mkdirSync} = require('fs');

let main = async () => {
   // await copyFile();
   try{
    if(!existsSync('lib'))
        mkdirSync('lib');
   let files = readdirSync('build/Release');
   files.forEach((item) => {
       console.log(item);
        copyFileSync(\`build/Release/${item}\`,\`lib/${item}\`);
   });
    } catch (err) {
        console.log('No files to move');
    }
};
main();
EOT

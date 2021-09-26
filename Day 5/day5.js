const fs=require("fs");
try {
    
    fs.mkdirSync("newFolder");
} catch (error) {
    console.log("nothin");
}
console.log("created")
fs.writeFileSync("./newFolder/test.txt","This file was created using fs module of nodeJS");
//Buffer -> const content=fs.readFileSync("./newFolder/test.txt");
const content=fs.readFileSync("./newFolder/test.txt","utf-8");
console.log(content);

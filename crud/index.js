const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "operations");
const filePath = `${dirPath}/newfile.txt`;
// Create a new file
fs.writeFileSync(filePath, "This is a new file");
// Read the contents of the file
fs.readFile(filePath, "utf-8", (err, contents) => {
  console.log(contents);
});
// Update the file
fs.appendFile(filePath," the name of the file is new file and ",(err, contents) => {
    if (!err) {
      console.log("File updated successfully");
    }
  }
);

// delete the file
// fs.unlinkSync(filePath);

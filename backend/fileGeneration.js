const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

//__dirname provides the path where the CODES exists and we need codes folder to actually store the codes somewhere
const dirCodes = path.join(__dirname, "codes");

if(!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, {recursive: true});
}

//Until here we know that codes folder does exists => we do have a space to store the incoming codes

const fileGeneration = async (basePath, format, content) => {
    const dirCodes = path.join(basePath, "codes");
    const jobID = uuid(); //gave a unique ID
    const fileName = `${jobID}.${format}`; //joined the format
    const filePath = path.join(dirCodes, fileName); //gave a path to the file
    await fs.writeFileSync(filePath, content); //wrote the content at that specific file path 
    return filePath;
};

module.exports = {
    fileGeneration,
};
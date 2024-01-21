const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

if(!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, {recursive: true});
}

const executeCppCode = (basePath, filePath) => {
    const outputPath = path.join(basePath, "outputs");


    const jobID = path.basename(filePath).split('.')[0]; //here we split the filename like filename.cpp so we only need the filename hence splitting and now we have the filename in an array like [filename, cpp] -> we need the first index

    const outPath = path.join(outputPath, `${jobID}.out`); //here we join the output path and the filename with the extension.txt

    const executablePath = path.join(outputPath, `${jobID}.out`);

    return new Promise(( resolve, reject ) => {
        const compileCommand = `g++ "${filePath}" -o "${outPath}"`;
        const runCommand = `"${executablePath}"`;

        // exec(`g++ "${filePath}" -o "${outPath}" && cd "${outputPath}" && ./${jobID}.out`, (error, stdout, stderr) => {
        //     error && reject({ error, stderr});
        //     stderr && reject(stderr);
        //     resolve(stdout);
        // });

        exec(compileCommand, (compileError, compileStdout, compileStderr) => {
            if (compileError) {
                reject({ error: compileError, stderr: compileStderr });
            } else {
                exec(runCommand, (runError, runStdout, runStderr) => {
                    if (runError) {
                        reject({ error: runError, stderr: runStderr });
                    } else {
                        resolve(runStdout);
                    }
                });
            }
        });
    });
};

module.exports = {
    executeCppCode,
};
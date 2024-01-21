const express = require("express");
const cors = require("cors");

const { fileGeneration } = require('./fileGeneration');

const { executeCppCode } = require('./executeCppCode');

const app = express();

app.use(cors());

const basePath = __dirname; // Declare basePath here (Used GPT Here)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//The basic setup for our server
app.get("/", (req, res) => {
    return res.json({ hello: "world" });
})

//The actual thing
app.post("/run", async(req, res) => {

    //extracting the values from the req.body
    //if we don't get a language so we will default to cpp
    const { language = "cpp", code } = req.body;

    if(code === undefined) {
        return res.status(400).json({ success: false, error: "No Code Received"});
    }

    try {
    //till here the code and the language have been received 

    //Now, we need to generate the cpp file 
    const filePath = await fileGeneration(basePath, language, code);
    
    //run and send the response
    const output = await executeCppCode(basePath, filePath);
    
    return res.json({ filePath, output });
    } catch (err) {
        res.status(500).json({ err });
    }
});

//The basic setup for our server
app.listen(5000, () => {
    console.log("Server is running on port 5000!!");
})
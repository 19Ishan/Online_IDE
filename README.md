# Online_IDE
Making an online, React Application Based, IDE using POSTman

How to run?
1. Clone this repo locally in your machine
2. Make sure you are in the folder named as Online_IDE. If not , cd online_IDE
3. Run npm init in the terminal and leave everything to default
4. Now run 3 commmands:- 
   a) "npm install react-scripts --save"
   b) "npm install --save uuid"
   c) "npm install --save cors"
5. Now cd backend, and run "npm start run". You should get a success message "Server is running on port 5000!!".
6. Open another terminal and cd client, then run "npm install --save axios"
7. Now run "npm start"

<!--
    1. Created a backend folder for all codes of REST APIs
    2. npm init in this folder, leave everything to default.
    3.Contains everything for the MetaData for the project.
    4. Created index.js -> the starting point of our project
    5. Created a script named as start so that I can run using "npm run start" instead of "node index.js".
    6. To create the rest api we installed express "npm install --save express"
    7. req.body cannot display becoz there is some another format so we use express.parser
    8. PostMAN -> localhost://5000/run
    9. fileGeneration -> 
        The function is async because we have to go step by step 
        We provide the path for the folder where our code will get stored
        But in case we don't have the codes folder then a problem may occur , so we check using the if-else whether the space exists. If doesn't exists then create it.

        We use unique ID generator, so that each file gets a unique ID
        npm install --save uuid
        v4 -> can now be used inside the code as the name uuid


    10. executeFile ->
        I got some error related to the filePaths so I just changed the way in which the exec command is written and added some extra paths like the executablePath, compileCommand and the runCommand

        Also I have changed the way the codes folder is made.
        Currently, it is required to have the codes folder. Because if it was getting created with the __dirname then the error was getting occurred due to the multiple paths being generated from generate file and the executable file

    11. FrontEnd -> 

    12. To send the code to the backend and to receive the code I have used the axious library
    npm install --save axious

    13. On a localhost when we send request from one port to another port it will be blocked by default due to the CORS policy => This issue is from the backend side not the frontend

    Cross Origin Resource Sharing Policy 

    so we install a module named as CORS on the backend part
    npm install --save cors

     -->

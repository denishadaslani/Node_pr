const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (req, res) => {

        let filepath = "";

        switch (req.url) {
            case "/":
                filepath = "./index.html";
                break;
                
            case "/about":
                filepath = "./about.html";
                break;

            case "/collection":
                filepath = "./collection.html";
                break;

            case "/contact":
                filepath = "./contact.html";
                break;

            default:
                filepath = "./not-found.html";
                break;
        }

        let data = fs.readFileSync(filepath, 'utf-8');
        res.end(data);
    }
);

let err;

server.listen(8000, () => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Server is running on port 8000");
    }
});
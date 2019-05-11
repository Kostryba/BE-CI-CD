const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
var port = process.env.PORT || 3000;

app.get("/", function (request, response) {
    response.send({name: 'Super Alex!!!!'});
});

app.get("/users", function (request, response) {
    const users = [
        {
            name: 'test1'
        },
        {
            name: 'test2'
        },
    ];
    response.send(users);
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});

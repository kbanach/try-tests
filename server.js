const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./userController');

// create server
const app = express();

function errorHandler(err, req, res, next) {
    // TODO: validation errors registered in express-handler are not cought here

    if (res.headersSent) {
        return next(err)
    }

    res.status(500)
    res.json({ error: err.message })
}


app.use(bodyParser.json());
app.use(errorHandler);

app.get('/user/:name', (req, res) => {
    res.json(userController.getId(req.params.name));
});

// run server
app.listen(3000, () => { console.log("Example app is running on port 3000") });
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

app.post('/user', (req, res) => {
    const newUser = userController.create(req.body.name);

    res.json(newUser);
});

app.get('/user/:name', (req, res) => {
    const user = userController.getByName(req.params.name);

    if (!user) {
        res.status(404).send({ error: 'User not found' });
    }

    res.json(user);
});

app.delete('/user/:name', (req, res) => {
    userController.remove(req.params.name);

    res.status(204).send();
});

// run server
app.listen(3000, () => { console.log("Example app is running on port 3000") });
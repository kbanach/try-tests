const User = require('./models/User');

async function create(req, res) {
    const newUser = new User(req.body);

    newUser.save();

    res.json(newUser);
}

async function getByName(req, res) {
    const user = await User.findOne({ name: req.params.name });

    console.log(user);
    if (!user) {
        res.status(404).send({ error: 'User not found' });
    }

    res.json(user);
}

async function remove(req, res) {
    await User.deleteOne({ name: req.params.name });

    res.status(204).send();
}

module.exports = {
    create,
    getByName,
    remove,
}

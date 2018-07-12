const User = require('./models/User');

async function create(req, res) {
    const user = new User(req.body);
    const validationErrors = user.validateSync();

    if(validationErrors){
        res.status(400);
    }

    user.save();

    res.json(user);
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

// ---------------------------------------------------------------------------------------------------------------------

// function create(UserModel, user) {
//     try {
//         UserModel.save(user);
//     } catch(ex) {
//         return { error: true };
//     }

//     return user;
// }

// module.exports = {
//     create,
//     getByName: async () => {
//         throw new Error('Not implemented');
//     },
//     remove: async () => {
//         throw new Error('Not implemented');
//     },
// }

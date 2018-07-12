const Chance = require('chance');

const chance = new Chance();

class User {
    constructor() {
        this.name = chance.name();
    }
}

module.exports = User;

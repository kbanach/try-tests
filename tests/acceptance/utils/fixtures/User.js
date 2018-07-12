const Chance = require('chance');
const _ = require('lodash');

const chance = new Chance();

class User {
    constructor() {
        this.name = chance.name();
    }

    setName(name) {
        const clone = _.clone(this);

        clone.name = name;

        return clone;
    }
}

module.exports = User;

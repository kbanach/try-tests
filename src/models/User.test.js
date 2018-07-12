const assert = require("assert");

const User = require('./User');

const user = new User({});
assert.ok(user.validateSync(), 'Does not return error');

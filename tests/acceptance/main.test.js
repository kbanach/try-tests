const assert = require("assert");

const User = require('./utils/fixtures/User');
const { getAppDriverInstance } = require('./utils/helpers');

const APP_DRIVER = getAppDriverInstance();

describe('User managment module', () => {
    it('should create user', async () => {
        const user = new User();

        await APP_DRIVER.createUser(user);

        assert.ok(APP_DRIVER.userExists(user), 'User doesn\'t exist');
    });

    it('should not create user with empty name', async () => {
        const user = new User()
            .setName('');

        const createdUser = await APP_DRIVER.createUser(user);

        assert.equal(createdUser, false, 'User got created');
    });

    it('should delete user', async () => {
        const user = new User();

        await APP_DRIVER.createUser(user);
        
        await APP_DRIVER.deleteUser(user);

        const userExists = await APP_DRIVER.userExists(user);

        assert.equal(userExists, false, 'User exists');
    });
});

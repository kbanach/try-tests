const { expect } = require('chai');

const { getAppDriverInstance } = require('./utils/helpers');

const APP_DRIVER = getAppDriverInstance();

describe('User managment', () => {
    it('creates user', async () => {
        await APP_DRIVER.createUser("Gomez");

        return APP_DRIVER.assertUserGotCreated("Gomez");
    });
});

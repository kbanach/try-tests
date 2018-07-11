const { expect } = require('chai');

const { getAppDriverInstance } = require('./utils/helpers');

const APP_DRIVER = getAppDriverInstance();

describe('User managment', () => {
    it('Creates user', async () => {
        const user = await APP_DRIVER.createUser("Gomez");

        return APP_DRIVER.assertUserGotCreated(user.name);
    });

    it('Deletes a user', async () => {
        const user = await APP_DRIVER.createUser("Gomez");
        
        await APP_DRIVER.deleteUser(user.name);

        return APP_DRIVER.assertUserNotFound(user.name);
    });
});

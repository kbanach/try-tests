const User = require('./utils/fixtures/User');
const { getAppDriverInstance } = require('./utils/helpers');

const APP_DRIVER = getAppDriverInstance();

describe('User managment', () => {
    it('Creates user', async () => {
        const user = new User();

        await APP_DRIVER.createUser(user);

        return APP_DRIVER.assertUserGotCreated(user);
    });

    it('Deletes a user', async () => {
        const user = new User();

        await APP_DRIVER.createUser(user);
        
        await APP_DRIVER.deleteUser(user);

        return APP_DRIVER.assertUserNotFound(user);
    });
});

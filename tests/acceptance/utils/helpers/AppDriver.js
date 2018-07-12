const assert = require("assert");

const APIClient = require('./APIClient');

class AppDriver {
    constructor(baseURL) {
        this.apiClient = new APIClient(baseURL);
    }

    async createUser(user) {
        return this.apiClient.createUser(user);
    }

    async assertUserGotCreated(user) {
        const foundUser = await this.apiClient.getUser(user.name);

        assert.equal(user.name, foundUser.name, "User doesn't exists");
    }

    async deleteUser(user) {
        return await this.apiClient.deleteUser(user.name);
    }

    async assertUserNotFound(user) {
        try{
            await this.apiClient.getUser(user.name);
        } catch(httpError) {
            assert.equal(httpError.response.status, 404, "User found!");
        }
    }
}

module.exports = AppDriver;

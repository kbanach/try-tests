const assert = require("assert");

const APIClient = require('./APIClient');

class AppDriver {
    constructor(baseURL) {
        this.apiClient = new APIClient(baseURL);
    }

    async createUser(name) {
        return this.apiClient.createUser(name);
    }

    async assertUserGotCreated(name) {
        const user = await this.apiClient.getUser(name);

        assert.equal(user.name, name, "User doesn't exists");
    }

    async deleteUser(name) {
        return await this.apiClient.deleteUser(name);
    }

    async assertUserNotFound(name) {
        let response;

        try{
            response = await this.apiClient.getUser(name);
        } catch(httpError) {
            assert.equal(httpError.response.status, 404, "User found!");
        }
    }
}

module.exports = AppDriver;

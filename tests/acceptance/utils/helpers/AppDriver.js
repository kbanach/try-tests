const assert = require("assert");

const APIClient = require('./APIClient');

class AppDriver {
    constructor(baseURL) {
        this.apiClient = new APIClient(baseURL);
    }

    async createUser(user) {
        try {
            return await this.apiClient.createUser(user);
        } catch(httpError) {
            if (httpError.response.status === 400) {
                return false;
            }
        }
    }

    async userExists(user) {
        let foundUser;

        try{
            foundUser = await this.apiClient.getUser(user.name);
        } catch(httpError) {
            if (httpError.response.status === 404) {
                return false;
            }
        }

        return user.name === foundUser.name;
    }

    async deleteUser(user) {
        return this.apiClient.deleteUser(user.name);
    }
}

module.exports = AppDriver;

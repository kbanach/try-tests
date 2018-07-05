const APIClient = require('./APIClient');

class AppDriver {
    constructor(baseURL) {
        this.apiClient = new APIClient(baseURL);
    }

    async createUser(name) {
        return await this.apiClient.createUser(name);
    }

    async assertUserGotCreated(name) {
        return await this.apiClient.getUser(name);
    }
}

module.exports = AppDriver;

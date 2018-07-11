const axios = require('axios');

class APIClient {
    constructor(baseURL) {
        this.axios = axios.create({
            baseURL,
            headers: {
                Accept: "application/json",
            }
        });
    }

    async createUser(name) {
        const response = await this.axios.post('/user', { name });

        return response.data;
    }

    async getUser(name) {
        const response = await this.axios.get(`/user/${name}`);

        return response.data;
    }

    async deleteUser(name) {
        const response = await this.axios.delete(`/user/${name}`);

        return response.data;
    }
}

module.exports = APIClient;

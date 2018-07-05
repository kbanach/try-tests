const AppDriver = require('./AppDriver');

function getAppDriverInstance() {
    return new AppDriver(process.env.BASE_URL || 'http://localhost:3000');
}

module.exports = {
    getAppDriverInstance,
};

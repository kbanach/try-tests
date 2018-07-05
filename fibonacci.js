function fibonacci(n) {
    if (typeof n === 'string') {
        throw new Error();
    }

    if (n < 0) {
        return null;
    }

    if (n === 0) {
        return 0;
    }

    if (n < 3) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}; 

module.exports = fibonacci;
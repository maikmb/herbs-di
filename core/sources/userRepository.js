const userRepository = (injection) => {
    return {
        getAll: () => {
            return injection.cache.users;
        }
    }
};

module.exports = { userRepository };
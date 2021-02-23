class UserService {
    constructor(injection) {
        this.userRepository = injection.userRepository;
    }

    getAll() {
        return this.userRepository.getAll();
    }
}

module.exports = { UserService }
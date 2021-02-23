const { HerbsContainer } = require("../../../core/herbs-di")
const { userRepository } = require("../sources/userRepository");
const { UserService } = require("../sources/userService");
const { getUsersUseCase } = require("../sources/getUsersUseCase");
const cache = require("../cache");

async function run() {
    const container = new HerbsContainer();

    container
        .addAsFunction(userRepository)
        .addAsClass(UserService)
        .addAsValue('cache', cache)
        .addAsFunction(getUsersUseCase);

    throw new Error("Graphql not implemented")
}

run();
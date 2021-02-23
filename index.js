const { HerbsContainer } = require("./core/herbs-di")
const { userRepository } = require("./core/sources/userRepository");
const { UserService } = require("./core/sources/userService");
const { getUsersUseCase } = require("./core/sources/getUsersUseCase");
const cache = require("./core/sources/cache");

async function run() {
    const container = new HerbsContainer();

    container
        .addAsFunction(userRepository)
        .addAsClass(UserService)
        .addAsValue('cache', cache)
        .addAsFunction(getUsersUseCase);

    const useCase = container.factoryContainer().getUsersUseCase;
    var output = await useCase.run({});

    console.log(output);
}

run();
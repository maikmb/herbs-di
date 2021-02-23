const { HerbsContainer } = require("../../../core/herbs-di")
const { userRepository } = require("./examples/userRepository");
const { UserService } = require("./examples/userService");
const { getUsersUseCase } = require("./examples/getUsersUseCase");
const cache = require("../cache");

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
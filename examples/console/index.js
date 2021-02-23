const { HerbsContainer } = require("../../core/herbs-di")
const { userRepository } = require("../sources/userRepository");
const { UserService } = require("../sources/userService");
const { getUsersUseCase } = require("../sources/getUsersUseCase");
const cache = require("../sources/cache");

async function run() {
    const container = new HerbsContainer();

    container
        .addAsFunction(userRepository)
        .addAsClass(UserService)
        .addAsValue('cache', cache)
        .addAsFunction(getUsersUseCase);

    const useCase = container.factoryContainer().getUsersUseCase;
    var output = await useCase.run({ name: 'Jhon' });

    console.log(output);
}

run();
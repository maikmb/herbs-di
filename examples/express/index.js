const { HerbsContainer } = require("../../core/herbs-di");
const { userRepository } = require("../sources/userRepository");
const { UserService } = require("../sources/userService");
const { getUsersUseCase } = require("../sources/getUsersUseCase");
const cache = require("../sources/cache");
const { expressServer } = require("./server");

const container = new HerbsContainer();

container
    .addAsFunction(userRepository)
    .addAsClass(UserService)
    .addAsValue('cache', cache)
    .addAsFunction(expressServer)
    .addAsFunction(getUsersUseCase);

const serverInstance = container.factoryContainer().expressServer;
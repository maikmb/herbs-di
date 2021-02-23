const { Ok, Err, usecase, step } = require('buchu');

const getUsersUseCase = (injection) => usecase('get all users from cache service', {

    // Input/Request type validation 
    request: {},

    // Dependency Injection control
    setup: (ctx) => ctx.di = injection,

    // Step audit and description
    'Check if the Item is valid': step((ctx) => {        
        // const users = ctx.di.userService.getAll();
        const users = ctx.di.UserService.getAll();
        return (ctx.ret = users);
    }),

});

module.exports = { getUsersUseCase };
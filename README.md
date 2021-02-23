# HerbsDI

Herbs Dependency Injection Container Core

## Purpose

The purpose of this tool is to make it more scalable and make service dependency management easier in your applications.

```sh
container
    .addAsFunction(userRepository)
    .addAsClass(UserService)
    .addAsValue('cache', cache)
    .addAsFunction(getUsersUseCase);

const useCase = container.factoryContainer().getUsersUseCase;
var output = await useCase.run({ name: 'Kenedy' });
```

## Running Examples Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/maikmb/herbs-di.git # or clone your own fork
cd herbs-di
npm install
```


## Scripts

- `dev:console` to run an example di container console
- `dev:express` to run an API with express middleware for the di container
- `dev:gql` to run an api with graphql middleware for the di container
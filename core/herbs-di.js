class HerbsContainer {
    sources = {};

    addAsFunction(source) {
        if (this.sources[source.name]);
        this.sources[source.name] = source;
        return this;
    }

    addAsClass(source) {
        if (this.sources[source.name]);
        this.sources[source.name] = function newClass() {
            return Reflect.construct(source, arguments)
        };
        return this;
    }

    addAsValue(destinarion, source) {
        if (this.sources[destinarion]);
        this.sources[destinarion] = source;
        return this;
    }


    factoryContainer() {
        const cache = {}
        const container = new Proxy(cache, {
            get: (target, prop) => this.resolve(container, target, prop),
            // dispatch erro when try modify container
            set: () => {
                throw new Error(`it is not possible to modify the container.`)
            },
            // ensures smooth operation in operations that require reflection
            getOwnPropertyDescriptor: (target, prop) => {
                const propDescriptor = Object.getOwnPropertyDescriptor(sources, prop);

                if (propDescriptor) {
                    propDescriptor.writable = false
                    propDescriptor.value = this.get(target, prop)

                }

                return propDescriptor
            },
            // allows you to list available sources
            ownKeys() {
                return Reflect.ownKeys(sources)
            }
        })

        return container
    }

    resolve(container, target, prop) {
        // no cache
        if (!target[prop]) {
            // get value
            const value = this.sources[prop]

            // opens more possibility, and prevents errors on operations such as console.log
            target[prop] = typeof value === "function"
                ? value(container)
                : value
        }

        return target[prop]
    }

}



module.exports = { HerbsContainer };
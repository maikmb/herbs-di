const useHerbsDi = (injection) => {
    return (req, res, next) => {
        Object.defineProperty(req, 'injection', {
            value: injection
        })
        next();
    }
}

module.exports = { useHerbsDi }
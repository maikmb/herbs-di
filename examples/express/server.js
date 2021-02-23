const express = require('express');
const { useHerbsDi } = require("../../core/herbs-di-express");

const expressServer = (injection) => {
    const app = express()
    const port = 3000

    app.use(useHerbsDi(injection))

    app.get('/', async (req, res) => {
        const { getUsersUseCase } = req.injection;
        const ret = await getUsersUseCase.run({ name: 'Jhon' });
        if (ret.isOk) {
            res.send({ users: ret.value });
            return;
        }
        res.send({ error: ret.err })
    })

    return app.listen(port, () => {
        console.log(`🚀 Example app listening at http://localhost:${port}`)
    })
}

module.exports = { expressServer };
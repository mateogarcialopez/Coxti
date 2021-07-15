const { validateSalary, getResponse, orderedOptions, getRange, assignCharacter } = require('../helpers/herlpers')

const salario = async (req, res) => {
    try {
        const { salario } = req.params
        if (!validateSalary(salario)) {
            return res.status(409).json({
                status: false,
                code:0,
                message: 'salary must be a number'
            })
        }

        if (parseInt(salario) < 100) {
            return res.status(409).json({
                status: false,
                code:1,
                message: 'salary must be greater than or equal to zero'
            })
        }

        let a = `${Math.floor(Math.random() * ((salario - 1) - (salario / 2))) + (salario / 2)} - ${Math.floor(Math.random() * ((salario - 1) - (salario / 2))) + (salario / 2)}`;
        let b = getRange(parseInt(salario))
        let c = `${Math.floor(Math.random() * ((salario * 3) - (salario * 2))) + (salario * 2)} - ${Math.floor(Math.random() * ((salario * 3) - (salario * 2))) + (salario * 2)}`

        let options = await assignCharacter(a, b, c)

        await orderedOptions(options)
        return res.json({
            result: getResponse(options)
        })

    } catch (error) {
        return res.status(409).json({
            status: false,
            error
        })
    }
}

module.exports = {
    salario
}
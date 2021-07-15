const pool = require('../db')


const addResidenceData = async (req, res) => {
    try {
        const data = {
            salario: req.body.salario,
            otros_ingresos: req.body.otros_ingresos,
            gastos_mensuales: req.body.gastos_mensuales,
            gastos_financieros: req.body.gastos_financieros,
            id_datos_personales: req.body.id_datos_personales
        }


        const dataSaved = await pool.query('INSERT INTO datos_financieros SET ?', [data])

        res.json({
            status: true,
            message: 'successfully stored financial data',
        })

    } catch (error) {
        return res.status(409).json({
            status: false,
            error
        })
    }
}

module.exports = {
    addResidenceData
}
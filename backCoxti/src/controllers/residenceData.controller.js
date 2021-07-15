const pool = require('../db')


const addResidenceData = async (req, res) => {
    try {
        const data = {
            deparatamento: req.body.deparatamento,
            ciudad: req.body.ciudad,
            barrio: req.body.barrio,
            direccion: req.body.direccion,
            id_datos_personales: req.body.id_datos_personales
        }
        
        const dataSaved = await pool.query('INSERT INTO datos_residencia SET ?', [data])

        res.json({
            status: true,
            message: 'successfully stored residence data',
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
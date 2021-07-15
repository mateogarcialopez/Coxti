const pool = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const addPersonalData = async (req, res) => {
    try {

        const data = {
            identificacion: req.body.identificacion,
            nombre_completo: req.body.nombre_completo,
            celular: req.body.celular,
            correo: req.body.correo,
            contrasena: bcrypt.hashSync(req.body.contrasena, 10),
        }
        
        const dataSaved = await pool.query('INSERT INTO datos_personales SET ?', [data])

        res.json({
            status: true,
            message: 'successfully stored personal data',
        })

    } catch (error) {
        return res.status(409).json({
            status: false,
            error
        })
    }
}

const getUserById = async (req, res) => { 
    try {

        const {identificacion} = req.params

        const userFound = await pool.query(`SELECT dp.identificacion, dp.nombre_completo, dp.celular, dp.correo, dr.ciudad, dr.deparatamento, dr.barrio, dr.direccion, df.salario, df.otros_ingresos, df.gastos_mensuales, df.gastos_financieros   
        FROM datos_personales dp
        INNER JOIN datos_residencia dr ON dr.id_datos_personales = dp.identificacion
        INNER JOIN datos_financieros df ON df.id_datos_personales = dp.identificacion
        WHERE dp.identificacion = ?;`, [identificacion])
        if (userFound.length >= 1) {
            return res.json({
                status: true,
                message: 'User Found',
                user: userFound
            })
        } else {
            return res.status(404).json({
                status: false,
                message: 'User Not Found'
            })
        }

    } catch (error) {
        return res.status(400).json({
            status: false,
            error
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const dataFound = await pool.query(`SELECT nombre_completo, celular, identificacion, correo FROM datos_personales`)
        if (dataFound.length >= 1) {
            return res.json({
                status: true,
                message: 'Users Found',
                users: dataFound
            })
        } else {
            return res.status(404).json({
                status: false,
                message: 'Users Not Found'
            })
        }

    } catch (error) {
        return res.status(400).json({
            status: false,
            error
        })
    }
}

const login = async (req, res) => {
    try {
        const { correo, contrasena } = req.body
        const correoFound = await pool.query('SELECT * FROM datos_personales WHERE correo = ?', [correo])
        if (correoFound.length > 0) {
            const password = bcrypt.compareSync(contrasena, correoFound[0].contrasena)
            if (password) {
                delete correoFound[0].contrasena
                const token = jwt.sign({ user: correoFound }, 'claveSecreta', { expiresIn: '48h' })
                return res.json({
                    status: true,
                    token: token,
                    user: correoFound[0]
                })
            } else {
                return res.status(404).json({
                    status: false,
                    code:0,
                    message: "corrreo o (contraseña) invalidos"
                })
            }
        } else {
            return res.status(404).json({
                status: false,
                code:0,
                message: "(corrreo) o contraseña invalidos"
            })
        }
    } catch (error) {
        return res.status(400).json({
            status: false,
            error
        })
    }
}

module.exports = {
    addPersonalData,
    getUserById,
    getUsers,
    login
}
const express = require('express')
const router = express.Router()
const ctrlPersonalData = require('../controllers/personalData.controller')
const ctrlResidencieData = require('../controllers/residenceData.controller')
const ctrlFinancialData = require('../controllers/financialData.controller')
const {verifyToken} = require('../middlewares/verifyToken')
const ctrlSalario = require('../controllers/salario.controller')

//Personal data
router.post('/addPersonalData', ctrlPersonalData.addPersonalData)
router.get('/getUsers', [verifyToken], ctrlPersonalData.getUsers)
router.get('/getUserById/:identificacion', [verifyToken], ctrlPersonalData.getUserById)
router.post('/login', ctrlPersonalData.login)

//Residence data
router.post('/addResidenceData', ctrlResidencieData.addResidenceData)

//Financial data
router.post('/addFinancialData', ctrlFinancialData.addResidenceData)

//punto 3
router.get('/salario/:salario', ctrlSalario.salario)


module.exports = router
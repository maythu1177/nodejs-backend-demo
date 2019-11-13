const express = require('express')
const { adminController} =require('../controller')
const authMiddleware = require('./middleware')
const router=express.Router()

router.use(authMiddleware)

router.get('/getMenu',adminController.readMenu)
router.post('/addMenu',adminController.addMenu)
router.post('/addFood',adminController.addFood)


module.exports = router
const express = require('express')
const { adminController} =require('../controller')
const authMiddleware = require('./middleware')
const router=express.Router()

router.use(authMiddleware)

router.put('/updateMenu/:menuId',adminController.updateMenu)
router.put('/updateFood/:foodId',adminController.updateFood)
router.post('/addMenu',adminController.addMenu)
router.post('/addFood',adminController.addFood)


module.exports = router
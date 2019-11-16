const {userController} = require('../controller')
const express = require('express')
const router = express.Router()


router.get("/getFood/:menuId",userController.readFood)
router.get("/getMenu",userController.readMenu)


module.exports= router
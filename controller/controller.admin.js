const { adminService } = require('../service')
const response = require('../model/response')

const multer = require('multer')
const path = require('path')



const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});

const upload = multer({storage:storage}).single('foodImage')

const addMenu = (req, res) => {
    const menuName = req.body.menuName
    adminService.addMenu(menuName).then(data => {
        res.json(response({ success: true, message: "success" }))
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}

const readMenu = (req, res) => {
    adminService.readMenu().then(data => {
        if (data.length) {
            res.json(response({ success: true, payload: data }))
        }
        else {
            res.json(response({ success: false, message: "no menu" }))
        }
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}

const addFood = (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            console.log(err)
            res.json(response({ success: false, message: err }))
        }
        else {
            console.log(req.file)
            const foodName = req.body.foodName
            const price = req.body.price
            const size = req.body.size
            const menuId = req.body.menuId
            const image = req.file.path
            adminService.addFood(foodName, image, price, size, menuId).then(data => {
                res.json(response({ success: true, message: "success" }))
            }).catch(err => {
                res.json(response({ success: false, message: err }))
            })
        }
    })
}

const readFood = (req, res) => {
    const menuId = req.params.menuId
    adminService.readFood(menuId).then(data => {
        if (data.length) {
            res.json(response({ success: true, payload: data }))
        }
        else {
            res.json(response({ success: false, message: 'no data' }))
        }
    }).catch(err => {
        res.json(response({ success: false, message: err }))
    })
}

module.exports = {
    addMenu, readMenu, addFood, readFood
}
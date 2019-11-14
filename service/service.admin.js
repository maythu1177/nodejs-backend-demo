const { demodb } = require('../db')

const addMenu = (menuName) =>{
    return demodb.addMenu(menuName)
}

const readMenu = () =>{
    return demodb.readMenu()
}

const addFood = (foodName,image,price,size,menuId) =>{
     return demodb.addFood(foodName,image,price,size,menuId)
}

const readFood = (menuId) =>{
    return demodb.readFood(menuId)
}

module.exports= { 
    addMenu, readMenu,addFood,readFood
}
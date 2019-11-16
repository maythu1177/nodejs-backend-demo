const { demodb } = require('../db')

const addMenu = (menuName) =>{
    return demodb.addMenu(menuName)
}

const addFood = (foodName,image,price,size,menuId) =>{
     return demodb.addFood(foodName,image,price,size,menuId)
}

const updateMenu = (menuId,menuName) =>{
    return demodb.updateMenu(menuId,menuName)
}

const updateFood = (foodId,foodName,image,price,size,menuId)=>{
    return demodb.updateFood(foodId,foodName,image,price,size,menuId)
}

module.exports= { 
    addMenu,addFood,updateMenu,updateFood
}
const {demodb} = require('../db')


const readMenu = () =>{
    return demodb.readMenu()
}

const readFood = (menuId) =>{
   return demodb.readFood(menuId)
}

module.exports = {
   readMenu,readFood
}
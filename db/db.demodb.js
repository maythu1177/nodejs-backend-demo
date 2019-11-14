const mysql2 = require("mysql2")
const util = require("util")

require('dotenv').config()

const mypool = mysql2.createConnection({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const register = (username,email,hash,phone) =>{
query = util.promisify(mypool.query).bind(mypool)
   return query(`INSERT INTO admin (name,email,password,phone) VALUES (?,?,?,?)`,[username,email,hash,phone])
   mypool.end()
}

const login = (email,password) =>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT * from admin where email='${email}'`)
}


const addMenu = (menuName)=>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`INSERT INTO menu(menu_name) VALUES (?)`,[menuName])
}

const readMenu = () =>{
  query =util.promisify(mypool.query).bind(mypool)
  return query(`SELECT * FROM menu`)
}

const addFood =(foodName,image,price,size,menuId)=>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`INSERT INTO food(food_name,image,price,size,menu_id) VALUES (?,?,?,?,?)`,[foodName,image,price,size,menuId])
    mypool.end()
}

const readFood =(menuId)=>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT * FROM food where menu_id = ${menuId}`)
}


module.exports= { 
    register,login,addMenu,readMenu,addFood,readFood
}
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

const updateMenu = (menuId,menuName) =>{
  query = util.promisify(mypool.query).bind(mypool)
  return query (`UPDATE menu SET menu_name = '${menuName}' WHERE menu_id = ${menuId}`)
}

const addFood =(foodName,image,price,size,menuId)=>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`INSERT INTO food(food_name,image,price,size,menu_id) VALUES (?,?,?,?,?)`,[foodName,image,price,size,menuId])
}

const readFood =(menuId)=>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT * FROM food where menu_id = ${menuId}`)
}

const updateFood =(foodId,foodName,image,price,size,menuId)=>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`UPDATE food SET image='${image}', food_name='${foodName}', price='${price}', size='${size}' , menu_id=${menuId} 
    WHERE food_id= ${foodId}`)
}

const addContact = (address,openingTime,phone) => {
    query = util.promisify(mypool.query).bind(mypool)
    return query(`INSERT INTO contact (address,opening_time,phone) VALUES (?,?,?)`,[address,openingTime,phone])
}

const readContact = ()=>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`SELECT * FROM contact`)
}

const updateContact = (address,openingTime,phone,contactId)=>{
    query = util.promisify(mypool.query).bind(mypool)
    return query(`UPDATE contact SET address='${address}', phone='${phone}', opening_time='${openingTime}' WHERE contact_id= ${contactId}`)
}

module.exports= { 
    register,login,addMenu,readMenu,addFood,readFood,updateMenu,updateFood,addContact,readContact,updateContact
}
const OrderModel = require('../models/Order.model')


const createorder = async(req,res)=>{
    const serial = req.body.serial;
    const products = req.body.products;
    const table = req.body.table;
    const user = req.body.userid;
    try{
    const neworder = await OrderModel.create({
        serial:serial,
        products:products,
        table:table,
        user:user
        })
        res.status(200).json(neworder).send("new order created")
    }catch(err){
        res.status(400)
    }
}


const getorder = async(req,res)=>{
    const orderid = req.params.orderid
    try{
        const order = await OrderModel.findById(orderid)
        res.json(order).send("order fetched")
    }catch(err){
        res.json(err).send("error")
    }
}



const getorders = async(req,res)=>{
    try{
        const orders = await OrderModel.find()
        res.json(orders).send("orders fetched")
    }catch(err){
        res.status(400)
    }
}
const updateorder = async(req,res)=>{
    const orderid = req.params.orderid;
    const products = req.body.products;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const table = req.body.tableid;
    const user = req.body.userid;
    try{
        const updatedorder = await OrderModel.findByIdAndUpdate(orderid,{
            products:products,
            quantity:quantity,
            price:price,
            table:table,
            user:user
            })
            res.json(updatedorder).send("order updated")
    }catch(err){
        res.json(err).send("error")
        }
}
const deleteorder = async(req,res)=>{
    const orderid = req.params.orderid;
    try{
        const deletedorder = await OrderModel.findByIdAndDelete(orderid)
        res.json(deletedorder).send("order deleted")
    }catch(err){
        res.json(err).send("error")
        }
}

module.exports = {
    createorder,
    getorder,
    getorders,
    updateorder,
    deleteorder
    }




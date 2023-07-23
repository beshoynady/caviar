const Categorymodel = require('../models/Category.model');

    
    const CreateCategory = async (req, res , next) => {
        try{
            const categoryname = await req.body.name;
            const CreateCategory= await Categorymodel.create({name: categoryname});
            CreateCategory.save();
            res.status(200).json(CreateCategory)
        }
        catch (error) {
            res.status(400).json(error);
            next(error);
        }
    };
    
    const getallcategory = async (req, res) => {
        try{
            const allcategory = await Categorymodel.find({})
            res.status(200).json(allcategory)
        }
        catch(error) {
            res.status(400).json(error);
        }
    }

    const getonecategory = async (req, res) => {
        const categoryid = req.query.categoryid
        try{
            const category = await Categorymodel.findById(categoryid)
            res.status(200).json(category)
        }catch(error){
            res.status(404).json(error);
        }
    }

    const updatecategory = async (req, res)=>{
        try {
            const {categoryid} =await req.params;
            const newcategoryname =await req.body.name;
            const category = await Categorymodel.findByIdAndUpdate({_id:categoryid},{name:newcategoryname},{new : true})
            res.status(200).json(category);
        }catch(error){
            res.status(404).json(error);
        }
    }

    const deleteCategory =async (req, res)=>{
        try{
            const categoryid = await req.params.categoryid;
            const categorydeleted = await Categorymodel.findByIdAndDelete(categoryid);
            res.status(200).json(categorydeleted);
        }catch(error){
            res.status(404).json(error);
        }
    }


module.exports = {
    CreateCategory,
    getallcategory,
    getonecategory,
    updatecategory,
    deleteCategory
}


const categories = require('../modules/categoryModel')

const categoryCtrl = {
    createCategory: async(req,res) =>{
        try {
            const {name}=req.body;
            // Simple Validation
        if (!name) {
            return res.status(400).json({ msg: 'Please enter all fields!' });
        }
            const category = await categories.findOne({name});
            
            if (category){
                return res.status(400).json({msg: 'This category already exists'});
            } 
            
            const newCategory = new categories({name})
          await newCategory.save()
            res.status(200).json({msg: 'Created a category',newCategory})
        }
         catch (error) {
            return res.status(500).json({msg: 'errer server......'});
        }
    },
    getCatergory:async(req,res)=>{
        try {
            
            let category = await categories.find();
    
            res.json({msg:"list categories loaded",category})
        }
        catch (error) {
            res.status(500).send("server error")
        }
        
    },
    deleteCategory: async(req, res) =>{
        try {
          Category=  await categories.findByIdAndDelete(req.params.id)
         
            res.json({msg: "Deleted a Category",Category})
        } catch (err) {
            return res.status(500).json({msg:err.message })
        }
    },
    updateCategory: async(req, res) =>{
        try {
            const {name} = req.body;
           
    
            newCategory= await categories.findOneAndUpdate({_id: req.params.id}, {
               name
            })
    
            res.json({msg: "Updated a Category",newCategory})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
};
module.exports = categoryCtrl
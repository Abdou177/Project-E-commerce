const Products = require('../modules/productModel');

const productCtrl = {
   CreateProduct: async (req,res)=>{
    const { product_id, title, price, description, content, images, category} = req.body;
    try {
        
        // Simple Validation
        if (!product_id|| !title || !price || !description || !content) {
          return res.status(400).json({ msg: 'Please enter all fields!' });
     } 
        if
        (!images) {
            return res.status(400).json({msg: 'no image upload..'})
        }
        

        const product = await Products.findOne({product_id})
        if(product)
        return res.status(400).json({msg:'This product already exists..'})

        const newProduct = new Products({ product_id, title:title.toLowerCase(), price, description, content, images, category})

        await newProduct.save();
       return res.status(200).json({msg:'Created a product with succes',newProduct})
       
    } 
    catch (error) {
        return res.status(500).json({msg:'errer server'})
        
    }
},
getProduct:async(req,res)=>{
    try {
        
        let Product= await Products.find();

        res.json({msg:"list Products loaded",Product})
       
    }
    
    catch (error) {
        res.status(500).send("server error")
    }
    
},
deleteProduct: async(req, res) =>{
    try {
      product =  await Products.findByIdAndDelete(req.params.id)
        res.json({msg: "Deleted a Product",product})
       
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},
updateProduct: async(req, res) =>{
    try {
        const {title, price, description, content, images, category} = req.body;
        if(!images) return res.status(400).json({msg: "No image upload"})

        newProduct= await Products.findOneAndUpdate({_id: req.params.id}, {
            title: title.toLowerCase(), price, description, content, images, category
        })

        res.json({msg: "Updated a Product",newProduct})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
};
module.exports = productCtrl
const router = require('express').Router();
const productCtrl = require('../controllers/productCtrl');
const authentifcation = require('../middleware/authentifcation');
const authAdmin =require ('../middleware/authAdmin')
// privte route require authentifcation and role Admin
//@route POST /products/CreateProduct
//@desc Register new Product
//@access Privte
router.post('/CreateProduct',authentifcation,authAdmin,productCtrl.CreateProduct);
// privte route require authentifcation and role Admin
//@route POST /products/getallproducts
//@desc get All Products
//@access Privte
router.get('/getallproducts',productCtrl.getProduct);
// privte route require authentifcation and role Admin
//@route DELETE /products/products/:id
//@desc Delete Product
//@access Privte
router.delete('/products/:id',productCtrl.deleteProduct);
// privte route require authentifcation and role Admin
//@route PUT /products/updateProduct/:id
//@desc Update Product
//@access Privte
router.put('/updateProduct/:id',authentifcation,authAdmin,productCtrl.updateProduct)
module.exports = router
const router = require('express').Router();
const categoryCtrl =require('../controllers/categoryCtrl');
const authentifcation= require('../middleware/authentifcation');
const authAdmin =require ('../middleware/authAdmin')


// privte route require authentifcation and role Admin
//@route POST /category/createCategory
//@desc Add new category
//@access Privte
router.post('/createCategory',authentifcation,authAdmin,categoryCtrl.createCategory);
// privte route require authentifcation and role Admin
//@route GET /category/getCatergory
//@desc Get All category
//@access Privte
router.get('/getCatergory',authentifcation,authAdmin,categoryCtrl.getCatergory);
// privte route require authentifcation and role Admin
//@route DELETE /category/delet/:id
//@desc Delete category
//@access Privte
router.delete('/delet/:id',authentifcation,authAdmin,categoryCtrl.deleteCategory);
// privte route require authentifcation and role Admin
//@route PUT /category/updateCategory/:id
//@desc Update category
//@access Privte
router.put('/updateCategory/:id',authentifcation,authAdmin,categoryCtrl.updateCategory)


module.exports = router
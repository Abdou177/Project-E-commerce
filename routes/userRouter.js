const router = require('express').Router();
const userCtrl =require('../controllers/userCtrl');
const authentifcation = require('../middleware/authentifcation');
const authAdmin =require ('../middleware/authAdmin')
const {registerRules,validator,loginRules} = require('../middleware/validator');
//@route POST users/register
//@desc Register new user
//@access Public

router.post('/register',registerRules,validator,userCtrl.register),
//@route POST users/login
//@desc authentifcation
//@access Public
router.post('/login',loginRules,validator,userCtrl.login),
//@route GET users/me
//@desc Get owen profiel require authentification
//@access Privte
router.get("/me",authentifcation,userCtrl.getCurrentUser),
// privte route require authentifcation and role Admin
//@route GET users/getall
//@desc Get All Users
//@access Privte
router.get('/getall',authentifcation,authAdmin,userCtrl.getUsers)




module.exports = router
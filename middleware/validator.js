const { body, validationResult} = require('express-validator');

const registerRules=[
    body("name").notEmpty().withMessage("the name is required"),
    body("email").notEmpty().withMessage("the email is required ").isEmail().withMessage("you should enter a valid email "),
    body("password").notEmpty().withMessage("the password is required ").isLength({min:6,max:20}).withMessage("the password must contain at least 6 characters and at most 20"),
]
const loginRules=[
    body("email").notEmpty().withMessage("the email is required ").isEmail().withMessage("you should enter a valid email "),
    body("password").notEmpty().withMessage("the password is required ").isLength({min:6,max:20}).withMessage("the password must contain at least 6 characters and at most 20"),
]

const validator =(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array().map(error=> ({msg:error.msg,param:error.param}) )})
    }
    next()
}
module.exports={
    registerRules,
    loginRules,
    validator
}
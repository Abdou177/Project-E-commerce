const users = require('../modules/userModel');
const bcrypt = require('bcrypt');
// Require the json web token
const jwt = require('jsonwebtoken');
const userCtrl = {
    register: async (req,res)=>{
        try {
            const {name, email, password} = req.body;
            const user = await users.findOne({email})
            if(user)
            return res.status(400).json({msg: 'the eamil already exists .....'})
         
            

            // Password Encrption 
            const passwordhash = await bcrypt.hash(password, 10);
            const User = new users({name, email, password: passwordhash})
           
            // Save new user from mongodb
            await User.save();
            return res.status(200).json({msg: 'user register with succes',User})
           }
         catch (error) {
            return res.status(500).json({msg: 'errer server'});
            
        }
    },
    login: async (req,res)=>{
        const {email, password} = req.body;
        try {
            
            // checking existing user
            const user = await users.findOne({email})
            
            if (!user){
                return res.status(400).json({msg: 'bad Credentials!!!'});
            }
            // checking password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch){
                return res.status(400).json({msg :'Bad Credentials!!!!!'});
            }
            // sing user
            const payload = {
                id: user._id,
                name:user.name,
            };
            
            // Generate token
            const token = await jwt.sign(payload,process.env.secretOrKey,{
                expiresIn: '7 days',
                
            });
           
            res.send({msg: 'Logged in with succes',user,token});
           
        }
         catch (err) {
            return res.status(500).json({msg: "errer server"})
        } 
    },
    getCurrentUser:(req,res)=>{
        let user = req.user;
        res.json({msg:'profiel',user})
    },
    getUsers:async(req,res)=>{
        try {
            
            let user= await users.find();

            res.json({msg:"list users loaded",user})
        }
        catch (error) {
            res.status(500).send("server error")
        }
        
    },
}
module.exports = userCtrl
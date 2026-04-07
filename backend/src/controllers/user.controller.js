//this is my controllers/user.controller.js
import { User } from "../models/user.model.js";

const registerUser = async(req,res)=>
{
    try{
      const{username,email,password}=req.body;

      // basic validation
      if(!username||!email||!password)
      {
        return res.status(400).json({message:"All fields are important"})
      }

      // check if user already exists
      const existing = await User.findOne({email:email.toLowerCase()})
      if(existing)
      {
        return res.status(400).json({message:"user already exists"});
      }

      //create user

      const user= await User.create(
        {
        username,
        email,
        password,
        }
      );
   res.status(201).json(
    {
        message:"User registered",
        user:{id:user._id,email:user.email,username:user.username}
    }
   );

    }
    catch(error)
    {
       return res.status(500).json({message:"Internal server error",error:error.message})
    }
};


const loginUser = async (req, res) => {
            console.log("LOGIN API HIT 🔥"); 

    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({
            email: email.toLowerCase()
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({
            message: "User logged in",
            id: user._id,
            email: user.email,
            username: user.username
        });

    } catch (error) {
        console.log(error); 
        res.status(500).json({
            message: "Internal server error"
        });
    }
};


const logoutUser = async(req,res)=>
{
    try
    {
const{email,password}= req.body;

    const userFound= await User.findOne(
        {
            email:email
        }
    )
    if(!userFound)
    {
        return res.status(400).json({message:"USER NOT FOUND"});
    }

    res.status(200).json({message:"USER LOGGED OUT SUCCESSFULLY"})
}
    catch(error)
    {
        res.status(500).json({message:"INTERNAL SERVER ERROR",error});
    }
    
}

export
{
    registerUser,
    loginUser,
    logoutUser
}
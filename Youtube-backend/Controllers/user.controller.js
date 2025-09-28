import User from "../Modals/user.modals.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const cookieOptions ={
httpOnly :true,
secure:false,
sameSite:'Lax'
}

// Create User (Signup)
export const createUser = async (req, res) => {
  try {
    const { channelName, userName, password, about, profilePic } = req.body;

    const isExist = await User.findOne({userName});

    if(isExist) {
        res.status(400).json({error:"user already exist Please try with other usernameS"});

    }
    else {
    const hashedPassword = await bcrypt.hash(password,10);


    // Save to DB
    const newUser = new User({
      channelName,
      userName,
      password :hashedPassword,
      about,
      profilePic,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully!",
      user: newUser,
    });
    }


  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};


export const CheckUser = async (req, res) => {
  try {
    const {  userName, password } = req.body;

    const user = await User.findOne({userName});

    if(user && await bcrypt.compare(password,user.password)) {
      const token =jwt.sign({userId:user._id},'Its_My_Secret_Key');
      res.cookie('token',token,cookieOptions);
        res.status(200).json({massage:'Logged in successfully',success:true,token});

    }
    else {
    res.status(400).json({
      message: "Invalid credential!",
    
    });
    }


  } catch (error) {

    res.status(500).json({ message: "server error!" });
  }
};



export const logOut = async (req, res) => {
  try {
    res
      .clearCookie("token", cookieOptions)
      .status(200)
      .json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Logout failed", error: error.message });
  }
};

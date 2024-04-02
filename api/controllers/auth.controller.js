import bcrypt from "bcrypt"


const register=async(req,res)=>{
const {username,email,password}=req.body;

// hash the password
const hashedPassword=await bcrypt.hash(password,10)
console.log(username,email,hashedPassword);

return hashedPassword;

//create a new user and save to DB
}

const login=(req,res)=>{
//db operations
}

const logout=(req,res)=>{
//db operations
}


export {
    register,
    login,
    logout
}
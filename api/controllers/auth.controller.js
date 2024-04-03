import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";


const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10)
        // console.log(username, email, hashedPassword);

        //create a new user and save to DB

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        })
        console.log(newUser);

        res.status(201).json({
            success: true,
            data: newUser,
            message: "user Created Successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: [error.message, "Error in creating the user"]
        })
    }

}

const login = async(req, res) => {
    const {username,password}=req.body

    try {
        // checking the user exists 

        const user=await prisma.user.findUnique({
            where:{username}
        })

        if(!user){
            return res.status(401).json({
                message:"invalid crendetnials"
            })
        }
        // check if the password is correct

        const isPasswordValid=await bcrypt.compare(password,user.password)

        if(!isPasswordValid){
            return res.status(401).json({
                message:"invalid crendetnials"
            })
        }

        // Generate cookie token and send to the user

    } catch (error) {
        res.status(500).json({
            success:false,
            message:["error in loggin ",error.message]
        })
    }
}

const logout = (req, res) => {
    //db operations
}


export {
    register,
    login,
    logout
}
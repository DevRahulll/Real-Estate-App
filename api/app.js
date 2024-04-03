import express from "express"
import "dotenv/config"
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser";

const app=express();

const PORT=process.env.PORT||6000


app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}...`);
})
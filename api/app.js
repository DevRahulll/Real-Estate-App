import express from "express"
import "dotenv/config"
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js"

const app=express();

const PORT=process.env.PORT||6000


app.use(express.json());

app.use("/api/posts",postRoute)
app.use("/api/auth",authRoute)

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}...`);
})
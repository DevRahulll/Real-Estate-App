import express from "express"
import "dotenv/config"
const app=express();

const PORT=process.env.PORT||6000

// app.use("/api/test",test)

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}...`);
})
import e from "express";
import connectDb from "./config/db.js";
import Router from "./route/todoRoute.js";
// import cors from 'cors';

const app = e();
app.use(e.json());

app.use("/api/v1", Router)
// app.use(cors());
// app.use(express.json())

// app.get("/", (req,res)=>{
//     res.send("Todo Api is running")
// })

app.listen(8000, async()=>{
    await connectDb();
    console.log("Server is Running at http://localhost:8000/");
});
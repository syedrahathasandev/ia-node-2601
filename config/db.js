import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]); 

import mongoose from "mongoose";

const connectDb = async() => {
    try{
        mongoose.connect(
            "mongodb+srv://syedrahatdev_db_user:Rahat212006@cluster0.t6wcccx.mongodb.net/todos"
        )
        console.log("mongoDB Connected");

    }
    catch(error){
        console.error("Connection Failed", error.message);
    }

}
export default connectDb;


// dns.setServers(["8.8.8.8", "1.1.1.1"]);

// const dbConnect = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL);
//         console.log("db connected");
//     } catch (error) {
//         console.error("Database connection failed:", error.message);
//     }
// };

// export { dbConnect };
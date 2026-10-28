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
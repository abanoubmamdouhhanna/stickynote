import mongoose from "mongoose";

const connectDB = async () => {
  console.log(process.env.DB_Local);
  
  return await mongoose
    .connect("mongodb://127.0.0.1:27017/stickyNote")
    .then(() => console.log("DB Connected successfully......"))
    .catch((err) => console.log(`Fail to connect DB.........${err}`));
};
export default connectDB;

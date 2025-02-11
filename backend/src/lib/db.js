import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb+srv://dharmika:1234@cluster1.xnfdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
      .then(() => console.log("DB Connected"));
  } catch (error) {
    console.log("MongoDB connection error" + error);
  }
};

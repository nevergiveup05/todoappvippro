import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);

    console.log("Lieen ket co so duwx lieu thanh cong");
  } catch (error) {
    console.error("Loi khi ket noi CSDL", error);
    process.exit(1); // exit with error
  }
};

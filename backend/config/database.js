import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectioInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        console.log(`MongoDb connected !!
            ${connectioInstance.connection.host }`);
    }catch (error) {
        console.log(`MongoDB connection failed: ${error.message}`);
        process.exit(1);//when the whole process is done we exit
    }
}


export default connectDB;
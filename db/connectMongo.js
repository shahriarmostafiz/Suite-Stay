import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
// const MONGO_URI = "mongodb + srv://nextUser:0dTQ2cd76Q9DWZEW@cluster1.rubdhat.mongodb.net/?retryWrites=true&w=majority"

const cached = {};

async function connectMongo() {

    if (!MONGO_URI) {
        throw new Error(
            "Please define the MONGO_URI environment variable inside .env.local"
        );
    }
    if (cached.connection) {
        return cached.connection;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            dbName: "Suite-Stay",

        };
        cached.promise = mongoose.connect(MONGO_URI, opts);
    }
    try {
        cached.connection = await cached.promise;
        console.log("connected");
    } catch (e) {
        cached.promise = undefined;
        throw e;
    }
    return cached.connection;
}
export default connectMongo;
import { MongoClient } from "mongodb";

require("dotenv").config();

if (!process.env.DB_NAME || !process.env.DB_PASSWORD) {
    throw new Error("Please add your Mongo URI to .env.local");
}

const uri: string = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.akash.mongodb.net/?retryWrites=true&w=majority`
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).

    let globalWithMongoClientPromise = global as typeof globalThis & {
        _mongoClientPromise: Promise<MongoClient>;
    };

    if (!globalWithMongoClientPromise._mongoClientPromise) {
        client = new MongoClient(uri);
        globalWithMongoClientPromise._mongoClientPromise = client.connect();
    }

    clientPromise = globalWithMongoClientPromise._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
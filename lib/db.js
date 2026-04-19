import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable.");
}

let client;
let clientPromise;

if (global._mongoClientPromise) {
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
  global._mongoClientPromise = clientPromise;
}

export async function getDb() {
  const connectedClient = await clientPromise;
  return connectedClient.db();
}

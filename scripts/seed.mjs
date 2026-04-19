import { MongoClient } from "mongodb";
import crypto from "crypto";

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("Missing MONGODB_URI.");
  process.exit(1);
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const derived = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${derived}`;
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const email = "demo@mtsub.app";
const existing = await db.collection("users").findOne({ email });

if (!existing) {
  await db.collection("users").insertOne({
    name: "Demo User",
    phone: "08030000000",
    email,
    passwordHash: hashPassword("password123"),
    role: "user",
    walletBalance: 25000,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  console.log("Seeded demo user.");
} else {
  console.log("Demo user already exists.");
}

await client.close();

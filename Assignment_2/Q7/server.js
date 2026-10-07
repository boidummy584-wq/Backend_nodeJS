import http from "node:http"
import { MongoClient } from "mongodb"

const PORT = 3000
const MONGO_URI = "mongodb://localhost:27017"

const client = new MongoClient(MONGO_URI)

async function startServer() {
    try {
        await client.connect()
        console.log("Connected to MongoDB")

        const
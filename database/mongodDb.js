import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    const database = client.db('EMR_Database');
    return database;
  } catch (err) {
    console.error(err);
    throw new Error('Could not connect to database!');
  }
}

export { connectToDatabase}
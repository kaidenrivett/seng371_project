import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

config();

const uri = config().MONGODB_URI;
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
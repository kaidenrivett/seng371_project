import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://seng371:group15@cluster0.mrapshc.mongodb.net/?retryWrites=true&w=majority"
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
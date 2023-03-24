import { connectToDatabase } from "../../../database/mongodDb";

export default async function handler(req, res) {
    const db = await connectToDatabase();
    const { id } = req.query
    const data = await db.collection('health_records').find({"patientId": Number(id)}).toArray();
    res.status(200).json(data);
  }
  
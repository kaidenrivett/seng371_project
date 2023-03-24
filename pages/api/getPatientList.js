import { connectToDatabase } from "../../database/mongodDb";

export default async function handler(req, res) {
    const db = await connectToDatabase();
    const { dept} = req.query
    const data = await db.collection('health_records').find({department: String(dept)}).project({_id: 0, firstName: 1, lastName: 1, id: "$patientId", age: 1, gender: 1, department: 1}).toArray();
    res.status(200).json(data);
  }
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';  // Ensure you handle DB connection logic here
import User from '../../models/user';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect();

    if (req.method === 'POST') {
        try {
            const { google_id, email } = req.body;

            // Create a new user
            const user = new User({ google_id, email });
            await user.save();

            res.status(201).json(user);
        } catch (error) {
            console.error('Database Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
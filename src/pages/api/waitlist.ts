import { NextApiRequest, NextApiResponse } from 'next';

// In-memory storage for waitlist entries (replace with database in production)
let waitlistEntries: any[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(waitlistEntries);
  }

  if (req.method === 'POST') {
    const { email, persona, notifyEmail } = req.body;
    
    const newEntry = {
      email,
      persona,
      timestamp: new Date().toISOString()
    };
    
    waitlistEntries.push(newEntry);
    
    // In a real application, you would save to a database here
    
    return res.status(200).json({ message: 'Successfully added to waitlist' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
// In-memory storage for waitlist entries (replace with database in production)
let waitlistEntries: any[] = [];

interface WaitlistEntry {
  email: string;
  persona: string;
  timestamp: string;
}

export async function getWaitlistEntries(): Promise<WaitlistEntry[]> {
  return waitlistEntries;
}

export async function addWaitlistEntry(data: { 
  email: string; 
  persona: string; 
  notifyEmail?: string; 
}): Promise<{ message: string }> {
  const newEntry = {
    email: data.email,
    persona: data.persona,
    timestamp: new Date().toISOString()
  };
  
  waitlistEntries.push(newEntry);
  return { message: 'Successfully added to waitlist' };
}
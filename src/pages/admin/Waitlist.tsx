import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';

interface WaitlistEntry {
  email: string;
  persona: string;
  timestamp: string;
}

const WaitlistAdmin = () => {
  const { data: entries, isLoading, error } = useQuery({
    queryKey: ['waitlist'],
    queryFn: async () => {
      const response = await fetch('/api/waitlist', {
        headers: {
          'Authorization': `Bearer ${process.env.ADMIN_SECRET}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch waitlist');
      return response.json() as Promise<WaitlistEntry[]>;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading waitlist</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Waitlist Entries</h1>
      <div className="space-y-4">
        {entries?.map((entry, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{entry.email}</p>
                <p className="text-sm text-gray-500">Persona: {entry.persona}</p>
              </div>
              <p className="text-sm text-gray-500">{new Date(entry.timestamp).toLocaleString()}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WaitlistAdmin;
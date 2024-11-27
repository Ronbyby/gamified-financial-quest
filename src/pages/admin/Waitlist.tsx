import { Card } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from "lucide-react";
import { getWaitlistEntries } from "@/api/waitlist";

interface WaitlistEntry {
  email: string;
  persona: string;
  timestamp: string;
}

const WaitlistAdmin = () => {
  const { data: entries, isLoading, error } = useQuery({
    queryKey: ['waitlist'],
    queryFn: getWaitlistEntries,
    refetchInterval: 5000,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-2">Erro ao Carregar Lista de Espera</h1>
        <p className="text-gray-600">Por favor, tente novamente mais tarde ou entre em contato com o suporte se o problema persistir.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Inscrições na Lista de Espera</h1>
      {!entries || entries.length === 0 ? (
        <Card className="p-4 text-center text-gray-500">
          Ainda não há inscrições na lista de espera
        </Card>
      ) : (
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <Card key={index} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{entry.email}</p>
                  <p className="text-sm text-gray-500">Persona: {entry.persona}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(entry.timestamp).toLocaleString()}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default WaitlistAdmin;
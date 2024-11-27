import { Card } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Answer } from "@/types";

// In-memory storage for quiz results (replace with database in production)
const quizResults: { persona: string; answers: Answer[]; timestamp: string }[] = [];

const getQuizResults = async () => quizResults;

const ResultsAdmin = () => {
  const { data: results, isLoading, error } = useQuery({
    queryKey: ['quiz-results'],
    queryFn: getQuizResults,
    refetchInterval: 5000, // Refetch every 5 seconds
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
        <h1 className="text-2xl font-bold text-red-500 mb-2">Error Loading Results</h1>
        <p className="text-gray-600">Please try again later or contact support if the issue persists.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Quiz Results</h1>
      {!results || results.length === 0 ? (
        <Card className="p-4 text-center text-gray-500">
          No quiz results yet
        </Card>
      ) : (
        <div className="space-y-4">
          {results.map((result, index) => (
            <Card key={index} className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Persona: {result.persona}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(result.timestamp).toLocaleString()}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Answers:</h4>
                  {result.answers.map((answer, i) => (
                    <p key={i} className="text-sm text-gray-600">
                      Question {answer.questionId}: {answer.selectedOption}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultsAdmin;
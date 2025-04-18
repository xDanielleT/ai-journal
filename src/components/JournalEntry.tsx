
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, SendHorizonal, BookHeart } from "lucide-react";

const JournalEntry = () => {
  const [entry, setEntry] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateResponse = async () => {
    if (!entry.trim()) {
      toast({
        title: "Please share your thoughts first",
        description: "Write about how you're feeling and I'll respond with something uplifting.",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Simulate AI response for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      const responses = [
        "Your feelings are valid, and you're doing better than you think. Remember that each step forward, no matter how small, is progress.",
        "You have an incredible strength within you. Today is a new opportunity to be kind to yourself and embrace growth.",
        "Your journey is unique and valuable. Take pride in how far you've come and have faith in how far you can go.",
        "You're not alone in this journey. Your openness to share and reflect shows wonderful self-awareness and courage."
      ];
      setResponse(responses[Math.floor(Math.random() * responses.length)]);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="text-center mb-8 animate-fade-in">
        <BookHeart className="w-12 h-12 mx-auto mb-4 text-purple-500" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Positive Thoughts Journal</h1>
        <p className="text-gray-600">Share how you're feeling, and I'll respond with something uplifting</p>
      </div>

      <Card className="p-6 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in">
        <Textarea
          placeholder="How are you feeling today?"
          className="min-h-[150px] mb-4 text-lg"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <Button
          className="w-full"
          onClick={generateResponse}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating response...
            </>
          ) : (
            <>
              <SendHorizonal className="mr-2 h-4 w-4" />
              Get uplifting response
            </>
          )}
        </Button>

        {response && (
          <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100 animate-fade-in">
            <p className="text-gray-800 leading-relaxed">{response}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default JournalEntry;

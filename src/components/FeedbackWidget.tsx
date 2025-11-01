'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeedbackWidget() {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleRatingClick = (value: number) => {
    setRating(value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the feedback to your backend
    // For now, we'll just show a success message
    console.log('Feedback submitted:', { rating, feedback });
    
    // You could integrate with a service like:
    // - Google Forms API
    // - Typeform
    // - Your own backend API
    // - Email service
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRating(null);
      setFeedback('');
      setIsOpen(false);
    }, 3000);
  };

  if (!isOpen && !submitted) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Card className="shadow-lg border-2 border-primary/20 max-w-xs">
          <CardContent className="p-4">
            <p className="text-sm font-medium mb-3">How was your experience?</p>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => handleRatingClick(value)}
                  className="text-2xl transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  aria-label={`Rate ${value} out of 5`}
                >
                  {value <= (rating || 0) ? '⭐' : '☆'}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Card className="shadow-lg border-2 border-green-500/20 bg-green-50 dark:bg-green-900/20 max-w-xs">
          <CardContent className="p-4">
            <p className="text-sm font-medium text-green-700 dark:text-green-300">
              ✅ Thank you for your feedback!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="shadow-lg border-2 border-primary/20 max-w-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Rate Your Experience</CardTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              aria-label="Close feedback"
            >
              ×
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className={`text-2xl transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary rounded ${
                      value <= (rating || 0) ? 'opacity-100' : 'opacity-40'
                    }`}
                    aria-label={`Rate ${value} out of 5`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="feedback" className="block text-sm font-medium mb-2">
                Additional Feedback (Optional)
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={3}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus:border-ring focus:ring-ring/50 focus:ring-[3px] outline-none"
                placeholder="Tell us how we can improve..."
              />
            </div>

            <div className="flex gap-2">
              <Button
                type="submit"
                className="flex-1"
                disabled={!rating}
              >
                Submit
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsOpen(false);
                  setRating(null);
                  setFeedback('');
                }}
              >
                Cancel
              </Button>
            </div>
          </form>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              💡 Tip: You can also share this tool with others who might find it useful!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


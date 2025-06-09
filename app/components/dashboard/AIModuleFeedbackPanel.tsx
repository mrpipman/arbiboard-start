
'use client';
import { useState } from "react";
import { useParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function AIModuleFeedbackPanel() {
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (feedback.trim().length > 0) {
      // Qui si invierebbe ai log/server o Firestore/DB
      console.log("🔁 Feedback inviato per il modulo:", id, feedback);
      setSubmitted(true);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">📝 Feedback & Issue Tracking</h2>

      <Card>
        <div className="p-4 space-y-4 text-sm">
          {submitted ? (
            <div className="text-green-600">✅ Feedback inviato. Grazie!</div>
          ) : (
            <>
              <p>Segnala bug, problemi di performance o suggerimenti per migliorare questo modulo AI.</p>
              <Textarea
                placeholder="Descrivi qui il tuo feedback..."
                rows={5}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <Button onClick={handleSubmit} disabled={!feedback.trim()}>
                Invia Feedback
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}

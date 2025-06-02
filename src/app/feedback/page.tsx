import AirtableForm from "@/components/airtable-form";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Feedback</h1>
      <AirtableForm />
    </div>
  );
}

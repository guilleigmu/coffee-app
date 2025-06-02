"use client";

interface AirtableFormProps {
  className?: string;
}

export default function AirtableForm({ className = "" }: AirtableFormProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <iframe
        className="airtable-embed w-full"
        src="https://airtable.com/embed/app2dVrLacWM3XkVy/pag24QcleOrpfGxH2/form"
        frameBorder="0"
        style={{
          background: "transparent",
          border: "1px solid #ccc",
          height: "533px",
        }}
      />
    </div>
  );
}

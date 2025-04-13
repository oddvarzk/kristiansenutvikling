import ContactForm from "../../components/KontaktForm";

export const metadata = {
  title: "Kontakt | Kristiansen Utvikling",
  description: "Learn about our company history, values, and team.",
};

export default function kontaktPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Ta en prat</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {" "}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

import ContactForm from "../../components/KontaktForm";

export const metadata = {
  title: "Kontakt | Kristiansen Utvikling",
  description:
    "Ta kontakt med Kristiansen Utvikling for å kunne få på plass din nettside, app eller ordne synligere SEO for din nettside",
};

export default function kontaktPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">
        Ta en <span className="text-cyan-400">prat</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {" "}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

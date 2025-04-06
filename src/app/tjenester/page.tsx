export const metadata = {
  title: "Tjenester | Kristiansen Utvikling",
  description:
    "Her får du vite alt om hvilken tjenester Kristiansen Utvikling har å tilby, alt fra app laging, nettside fiksing, designing.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Tjenester</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
    </div>
  );
}

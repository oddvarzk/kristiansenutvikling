// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt </h3>
            <p>E-post: hei@kristiansenutvikling.com</p>
            <p>Telefon: +47 472 07 143</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Følg oss</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-400">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>
            © {new Date().getFullYear()} Kristiansen Utvikling. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

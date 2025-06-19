import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Liens rapides */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/evenements"
                  className="hover:text-white transition-colors"
                >
                  Événements
                </Link>
              </li>
              <li>
                <Link
                  href="/epreuves"
                  className="hover:text-white transition-colors"
                >
                  Épreuves
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: contact@velorunfestival.fr</li>
              <li>Téléphone: +33 X XX XX XX XX</li>
              <li>Adresse: [Adresse de l&apos;association]</li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Suivez-nous
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/velorunfestival"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} VeloRunFestival. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

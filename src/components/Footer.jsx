import { Code, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 text-white">
              <Code size={24} />
              <span className="text-xl font-bold">
                La Fabrique<span className="text-amber-500"> du code</span>
              </span>
            </div>
            <p className="text-sm max-w-xs mb-6">
              Développement web artisanal et professionnel pour les entreprises
              des Hauts-de-France.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-500 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-amber-500 transition-colors"
                >
                  Services & Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-amber-500 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="hover:text-amber-500 transition-colors"
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Infos Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-amber-500" />
                Amiens, Hauts-de-France
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                Disponible pour nouveaux projets
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>
            &copy; 2025 La Fabrique du Code - Gérald François. Tous droits
            réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

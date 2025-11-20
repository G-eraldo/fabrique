"use client";

import { Code, Menu, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const navItems = [
    { name: "Accueil", page: "/" },
    { name: "Services", page: "/services" },
    { name: "Réalisations", page: "/portfolio" },
    { name: "À Propos", page: "/a-propos" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-[#F8FAFC] backdrop-blur-md shadow-md py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Link
            href="/"
            className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-white"
          >
            <Code size={24} strokeWidth={2.5} />
          </Link>
          <Link
            href="/"
            className="text-xl font-bold tracking-tight transition-colors"
          >
            La Fabrique<span className="text-amber-500"> du code</span>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              href={item.page}
              key={item.page}
              className="text-sm font-medium hover:text-amber-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button>
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>
        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md"
          >
            {isMenuOpen ? <XIcon /> : <Menu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-4">
            {[...navItems, { name: "Contact", page: "contact" }].map((item) => (
              <Link
                href={item.page}
                key={item.page}
                className="text-sm font-medium hover:text-amber-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

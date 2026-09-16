import { Button } from "@/components/ui/button";
import { Briefcase, Layout, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative pt-32 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-900 lg:h-[calc(100vh-30px)] flex items-center"
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-48 left-24 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-24 right-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-amber-400 text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                Amiens & Hauts-de-France
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Création de sites web pour{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
                  TPE et PME
                </span>{" "}
                à Amiens
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                J&apos;aide les TPE, PME, artisans et commerçants d&apos;Amiens et
                des Hauts-de-France à disposer d&apos;un site web clair, rapide et
                simple à gérer. Site vitrine, boutique en ligne ou outil sur
                mesure : je vous accompagne jusqu&apos;à la prise en main.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild className="text-lg px-8">
                  <Link href="/services">Voir mes offres</Link>
                </Button>
                <Button asChild className="bg-slate-800 hover:bg-slate-700 text-white shadow-lg hover:shadow-slate-800/30 focus:ring-slate-800">
                  <Link href="/portfolio">Mes réalisations</Link>
                </Button>
              </div>
            </div>
            {/*Rajouter photo ici  */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto rounded-[2.5rem] h-[600px]">
                <div className="relative h-[572px] w-full max-w-[500px] overflow-hidden rounded-2xl">
                  <Image
                    src="/image-de-code.jpg"
                    alt="Développeur web au travail"
                    fill
                    priority
                    sizes="(min-width: 1024px) 500px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages (Quick Highlights from Services/About) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Projet cadré",
                desc: "Un calendrier adapté à votre projet, défini dès le départ selon vos besoins et vos contenus.",
              },
              {
                icon: Layout,
                title: "Pensé pour tous les écrans",
                desc: "Une expérience de navigation conçue pour le mobile, la tablette et l'ordinateur.",
              },
              {
                icon: Briefcase,
                title: "Partenariat Local",
                desc: "Un auto-entrepreneur près d'Amiens dédié à votre réussite. Un seul contact, zéro jargon technique.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300 border border-transparent hover:border-amber-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Portfolio/Contact */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Prêt à propulser votre activité ?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Découvrez des réalisations et démonstrations, ou parlez-moi de
            votre besoin pour obtenir un devis adapté.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link href="/portfolio">Voir mes réalisations</Link>
            </Button>

            <Button asChild className="bg-slate-800 hover:bg-slate-700 text-white shadow-lg hover:shadow-slate-800/30 focus:ring-slate-800">
              <Link href="/contact">Contactez-moi</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

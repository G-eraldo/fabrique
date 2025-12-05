"use client";

import { submitForm } from "@/lib/sendEmail";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { Button } from "./ui/button";

const initialState = {
  success: null,
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="">
      {pending ? "Envoi en cours..." : "Envoyer ma demande de devis"}
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
}

export default function FormContent() {
  const [state, formAction] = useActionState(submitForm, initialState);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message); // Toast de succès
      } else {
        toast.error(state.message); // Toast d'erreur
      }
    }
  }, [state]); // Exécuter l'effet uniquement lorsque l'état change

  // Fonction pour valider le formulaire avant soumission
  const validateAndSubmit = (formData) => {
    const message = formData.get("message");

    if (!message || message.trim().length < 5) {
      setMessageError(
        "Votre message est trop court. Veuillez écrire un message plus détaillé."
      );
      return false;
    }

    setMessageError("");
    return formAction(formData);
  };
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Contactez{" "}
            <span className="text-amber-500">La Fabrique du code</span>
          </h1>
          <p className="text-xl text-slate-600">
            Remplissez ce formulaire pour obtenir un devis rapide et gratuit.
            Plus vous êtes précis, plus ma réponse le sera !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Formulaire de Devis
            </h3>
            <form className="space-y-4" action={validateAndSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Votre Nom / Nom de l'entreprise
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                  placeholder="Ex: Boulangerie Dubois"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Votre Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                  placeholder="contact@votre-entreprise.fr"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Votre numéro de téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150"
                  placeholder="Ex: 07 67 26 53 66"
                  pattern="0[1-9]([ .-]?[0-9]{2}){4}"
                />
              </div>
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Type de projet souhaité
                </label>
                <select
                  name="projectType"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150 bg-white"
                >
                  <option value="">-- Sélectionnez --</option>
                  <option value="vitrine">Site Vitrine Professionnel</option>
                  <option value="ecommerce">
                    Boutique en Ligne (E-commerce)
                  </option>
                  <option value="app">Application Web / Sur Mesure</option>
                  <option value="autre">Autre / J'ai besoin de conseils</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Décrivez votre projet et vos besoins (Le plus de détails
                  possible)
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className={`w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition duration-150 ${
                    messageError ? "border-red-500" : ""
                  }`}
                  onChange={() => setMessageError("")}
                  placeholder="Quel est l'objectif principal de ce site ? Avez-vous déjà un contenu ?"
                ></textarea>
                {messageError && (
                  <p className="text-red-500 text-sm mt-1">{messageError}</p>
                )}
              </div>
              <SubmitButton className="w-full mt-6" />
            </form>
          </div>

          {/* Direct Contact Info */}
          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-6">
                Coordonnées Directes
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone size={24} className="mr-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-sm text-slate-400">
                      Téléphone (Gérald François)
                    </div>
                    <a
                      href="tel:0767265366"
                      className="text-lg font-bold hover:text-amber-500 transition-colors"
                    >
                      07 67 26 53 66
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail size={24} className="mr-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-sm text-slate-400">
                      Email Professionnel
                    </div>
                    <a
                      href="mailto:gerald-f@hotmail.fr"
                      className="text-lg font-bold hover:text-amber-500 transition-colors"
                    >
                      contact@lafabriqueducode.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin
                    size={24}
                    className="mr-4 mt-1 text-amber-500 shrink-0"
                  />
                  <div>
                    <div className="text-sm text-slate-400">Localisation</div>
                    <div className="text-lg font-bold">
                      Amiens, Hauts-de-France
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-sm text-slate-400">
                Disponible pour discuter de votre projet du lundi au vendredi.
                Je m'engage à répondre à votre demande dans les 24h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

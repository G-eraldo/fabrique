"use client";

import { ArrowRight, Bell, CheckCircle2, FileText, Inbox, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const stages = [
  {
    label: "La demande",
    icon: Inbox,
    title: "Tout part d’un message client.",
    description: "Votre prospect remplit le formulaire de votre site. Vous disposez des informations utiles pour commencer à lui répondre.",
  },
  {
    label: "Le suivi n8n",
    icon: FileText,
    title: "La demande trouve sa place.",
    description: "Le parcours envisagé avec n8n : ajouter la demande dans votre outil de suivi et vous prévenir, sans recopier les informations.",
  },
  {
    label: "L’aide Hermes",
    icon: Sparkles,
    title: "Une réponse préparée. Vous décidez.",
    description: "Hermes pourrait résumer le besoin et préparer un brouillon à partir de vos consignes. Vous relisez et validez avant tout envoi.",
  },
];

export default function AutomationDemo() {
  const [stage, setStage] = useState(0);
  const current = stages[stage];
  const Icon = current.icon;

  return (
    <article className="automation-demo" aria-labelledby="automation-demo-title">
      <div className="demo-intro">
        <span className="badge badge-amber">Exemple interactif · données fictives</span>
        <h3 id="automation-demo-title" className="h3">
          Du premier contact au brouillon de réponse.
        </h3>
        <p>
          Vous êtes artisan. Une demande de devis arrive pendant un chantier.
          Voici comment vos outils pourraient prendre le relais.
        </p>
        <Link className="inline-link" href="/automatisations">
          Découvrir les automatisations <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <p className="demo-caption">
          Simulation illustrative, sans connexion à n8n ou Hermes. Les outils
          compatibles et les actions sont vérifiés pour chaque projet.
        </p>
      </div>
      <div className="demo-player">
        <div className="demo-controls" role="group" aria-label="Explorer les étapes de l’exemple">
          {stages.map((item, index) => (
            <button
              type="button"
              key={item.label}
              aria-pressed={stage === index}
              aria-controls="automation-demo-result"
              onClick={() => setStage(index)}
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </button>
          ))}
        </div>
        <div id="automation-demo-result" className="demo-result" aria-live="polite" aria-atomic="true">
          <div className="demo-stage-heading">
            <span className="icon-box"><Icon size={22} aria-hidden="true" /></span>
            <h4>{current.title}</h4>
          </div>
          <p>{current.description}</p>
          {stage === 0 && (
            <div className="demo-message">
              <span className="demo-label">Formulaire du site · Camille, à Amiens</span>
              <p>
                Bonjour, je souhaite faire repeindre mon salon de 25 m² à Amiens
                le mois prochain. Pourriez-vous me proposer un devis ?
              </p>
            </div>
          )}
          {stage === 1 && (
            <div className="demo-record">
              <span className="demo-label">Aperçu du suivi</span>
              <dl>
                <div><dt>Contact</dt><dd>Camille · Amiens</dd></div>
                <div><dt>Besoin</dt><dd>Peinture · salon de 25 m²</dd></div>
                <div><dt>Échéance</dt><dd>Le mois prochain</dd></div>
                <div><dt>Statut</dt><dd>À recontacter</dd></div>
              </dl>
              <p className="demo-notice"><Bell size={16} aria-hidden="true" /> Alerte prévue : nouvelle demande de devis.</p>
            </div>
          )}
          {stage === 2 && (
            <div className="demo-message">
              <span className="demo-label">Exemple de brouillon · à relire</span>
              <p>
                Bonjour Camille, merci pour votre demande concernant la peinture
                de votre salon de 25 m² à Amiens. Pour préparer un devis,
                pourriez-vous préciser l’état des murs et vos disponibilités
                pour une visite ?
              </p>
              <p className="demo-notice"><CheckCircle2 size={16} aria-hidden="true" /> Votre validation reste nécessaire avant l’envoi.</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

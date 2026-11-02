"use client";

import { loginAdmin } from "@/lib/adminActions";
import { useActionState } from "react";

export default function AdminLogin() {
  const [state, action, pending] = useActionState(loginAdmin, {
    success: false,
    message: "",
  });
  return (
    <div className="form-card" style={{ maxWidth: 460, margin: "0 auto" }}>
      <h1 className="h3">Connexion administrateur</h1>
      <p className="muted">Cet espace est réservé au suivi des demandes.</p>
      <form action={action}>
        <div className="field">
          <label htmlFor="admin-email">E-mail</label>
          <input
            id="admin-email"
            name="email"
            type="email"
            autoComplete="username"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="admin-password">Mot de passe</label>
          <input
            id="admin-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        {state.message && (
          <p className="form-error" role="alert">
            {state.message}
          </p>
        )}
        <button className="btn btn-dark" type="submit" disabled={pending}>
          {pending ? "Connexion…" : "Se connecter"}
        </button>
      </form>
    </div>
  );
}

"use client";

import { addLeadNote, deleteLead, updateLeadStatus } from "@/lib/adminActions";
import { STATUS } from "@/lib/site";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";

function StatusControl({ id, currentStatus }) {
  const router = useRouter();
  const [state, action, pending] = useActionState(updateLeadStatus, {
    success: false,
    message: "",
  });
  useEffect(() => {
    if (state.success) router.refresh();
  }, [state, router]);
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <div className="field">
        <label htmlFor="lead-status">Statut</label>
        <select id="lead-status" name="status" defaultValue={currentStatus}>
          {Object.entries(STATUS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-dark" disabled={pending}>
        {pending ? "Enregistrement…" : "Enregistrer le statut"}
      </button>
      {state.message && (
        <p role="status" className={state.success ? "muted" : "form-error"}>
          {state.message}
        </p>
      )}
    </form>
  );
}

function NoteControl({ id }) {
  const router = useRouter();
  const formRef = useRef(null);
  const [state, action, pending] = useActionState(addLeadNote, {
    success: false,
    message: "",
  });
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      router.refresh();
    }
  }, [state, router]);
  return (
    <form action={action} ref={formRef}>
      <input type="hidden" name="id" value={id} />
      <div className="field">
        <label htmlFor="lead-note">Note interne ou interaction</label>
        <textarea
          id="lead-note"
          name="content"
          minLength={2}
          maxLength={4000}
          required
          rows={4}
          placeholder="Compte rendu d'appel, prochaine action…"
        />
      </div>
      <button type="submit" className="btn btn-dark" disabled={pending}>
        {pending ? "Enregistrement…" : "Ajouter la note"}
      </button>
      {state.message && (
        <p role="status" className={state.success ? "muted" : "form-error"}>
          {state.message}
        </p>
      )}
    </form>
  );
}

export default function AdminControls({ id, status }) {
  return (
    <div className="admin-panel">
      <h2 className="h3">Suivi de la demande</h2>
      <StatusControl id={id} currentStatus={status} />
      <div style={{ borderTop: "1px solid var(--line)", margin: "1.7rem 0" }} />
      <NoteControl id={id} />
      <div style={{ borderTop: "1px solid var(--line)", margin: "1.7rem 0" }} />
      <form
        action={deleteLead}
        onSubmit={(event) => {
          if (
            !window.confirm(
              "Supprimer définitivement cette demande et son historique ?",
            )
          )
            event.preventDefault();
        }}
      >
        <input type="hidden" name="id" value={id} />
        <button className="btn btn-outline" type="submit">
          Supprimer la demande
        </button>
      </form>
    </div>
  );
}

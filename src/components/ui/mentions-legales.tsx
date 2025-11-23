import { useNavigate } from "react-router-dom";

export default function MentionsLegales() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="max-w-2xl w-full bg-card/80 rounded-xl shadow-lg p-8 border border-border">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 rounded bg-muted text-foreground hover:bg-muted-foreground/10 border border-border transition"
        >
          ← Retour
        </button>
        <h1 className="text-2xl font-bold mb-6 text-foreground">Mentions légales</h1>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">Éditeur du site</h2>
        <p className="mb-4 text-muted-foreground">
          Léo-Paul Jay<br />
          Email : <a href="mailto:leopaul.jay@outlook.com" className="underline">leopaul.jay@outlook.com</a><br />
          Pays : France
        </p>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">Hébergement</h2>
        <p className="mb-4 text-muted-foreground">
          Aucun pour le moment.
        </p>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">Propriété intellectuelle</h2>
        <p className="mb-4 text-muted-foreground">
          Tous les contenus présents sur ce site (textes, images, code, etc.) sont la propriété de Léo-Paul Jay, sauf mention contraire. Toute reproduction, représentation, modification ou publication, totale ou partielle, est interdite sans autorisation préalable.
        </p>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">Données personnelles</h2>
        <p className="mb-4 text-muted-foreground">
          Les informations collectées via le formulaire de contact sont uniquement utilisées pour répondre à vos messages. Vous pouvez demander la suppression de vos données à tout moment par email.
        </p>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">Cookies</h2>
        <p className="mb-4 text-muted-foreground">
          Ce site n'utilise pas de cookies à des fins de suivi ou de publicité.
        </p>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">Contact</h2>
        <p className="mb-2 text-muted-foreground">
          Pour toute question, contactez : <a href="mailto:leopaul.jay@outlook.com" className="underline">leopaul.jay@outlook.com</a>
        </p>
      </div>
    </section>
  );
}

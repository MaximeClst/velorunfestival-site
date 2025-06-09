import { Button } from "@/components/ui/button";
import { requiredAuth } from "@/lib/auth/helper";
import Link from "next/link";

export default async function AdminPage() {
  const user = await requiredAuth();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Interface d&apos;administration
          </h1>
          <p className="text-gray-600">
            Bienvenue {user.name}, vous pouvez maintenant modifier le contenu du
            site.
          </p>
        </div>

        {/* Grille des actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gestion des partenaires */}
          <div className="bg-white rounded-lg shadow-md p-6 border">
            <h3 className="text-xl font-semibold mb-4">Partenaires</h3>
            <p className="text-gray-600 mb-4">
              Gérez les partenaires affichés sur le site
            </p>
            <Button asChild className="w-full">
              <Link href="/admin/partenaires">Gérer les partenaires</Link>
            </Button>
          </div>

          {/* Gestion des événements */}
          <div className="bg-white rounded-lg shadow-md p-6 border">
            <h3 className="text-xl font-semibold mb-4">Événements</h3>
            <p className="text-gray-600 mb-4">
              Créez et modifiez les événements cyclistes
            </p>
            <Button asChild className="w-full">
              <Link href="/admin/evenements">Gérer les événements</Link>
            </Button>
          </div>

          {/* Gestion du contenu */}
          <div className="bg-white rounded-lg shadow-md p-6 border">
            <h3 className="text-xl font-semibold mb-4">Contenu</h3>
            <p className="text-gray-600 mb-4">
              Modifiez les textes et images du site
            </p>
            <Button asChild className="w-full">
              <Link href="/admin/contenu">Modifier le contenu</Link>
            </Button>
          </div>

          {/* Paramètres */}
          <div className="bg-white rounded-lg shadow-md p-6 border">
            <h3 className="text-xl font-semibold mb-4">Paramètres</h3>
            <p className="text-gray-600 mb-4">
              Configurez les paramètres du site
            </p>
            <Button asChild className="w-full">
              <Link href="/admin/parametres">Paramètres</Link>
            </Button>
          </div>

          {/* Statistiques */}
          <div className="bg-white rounded-lg shadow-md p-6 border">
            <h3 className="text-xl font-semibold mb-4">Statistiques</h3>
            <p className="text-gray-600 mb-4">
              Consultez les statistiques du site
            </p>
            <Button asChild className="w-full">
              <Link href="/admin/statistiques">Voir les stats</Link>
            </Button>
          </div>

          {/* Retour au site */}
          <div className="bg-white rounded-lg shadow-md p-6 border">
            <h3 className="text-xl font-semibold mb-4">Site public</h3>
            <p className="text-gray-600 mb-4">Retournez voir le site public</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Voir le site</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

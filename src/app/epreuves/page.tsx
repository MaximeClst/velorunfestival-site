import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Données temporaires pour les épreuves
const epreuves = [
  {
    id: 1,
    title: "Marathon VTT",
    type: "VTT",
    distance: "42 km",
    denivele: "800m",
    description:
      "Une épreuve exigeante sur les sentiers de la forêt. Parcours technique avec des passages en sous-bois et des montées raides.",
    image: "/images/epreuve-img/epreuve-1.jpg",
    difficulty: "Difficile",
    categories: ["Élite", "Senior", "Master"],
  },
  {
    id: 2,
    title: "Vélo Run Marmaille",
    type: "Trial",
    distance: "5 spéciales",
    denivele: "1200m",
    description:
      "5 spéciales chronométrées en descente. Des sections techniques et engagées pour les amateurs de sensations fortes.",
    image: "/images/epreuve-img/epreuve-marmaille.jpg",
    difficulty: "Expert",
    categories: ["Élite", "Senior"],
  },
  {
    id: 3,
    title: "Course Familiale",
    type: "Route",
    distance: "10 km",
    denivele: "100m",
    description:
      "Un parcours accessible à tous, idéal pour les familles et les débutants. Circuit urbain sécurisé.",
    image: "/images/epreuve-3.jpg",
    difficulty: "Facile",
    categories: ["Tous niveaux", "Famille"],
  },
  {
    id: 4,
    title: "Gravel Explorer",
    type: "Gravel",
    distance: "60 km",
    denivele: "400m",
    description:
      "Une aventure sur les chemins de campagne. Mélange de routes et de chemins pour découvrir la région autrement.",
    image: "/images/epreuve-4.jpg",
    difficulty: "Intermédiaire",
    categories: ["Senior", "Master", "Famille"],
  },
];

export default function EpreuvesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* En-tête de la page */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos Épreuves</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez toutes nos épreuves cyclistes. Des parcours adaptés à tous
          les niveaux, du débutant au coureur confirmé.
        </p>
      </div>

      {/* Filtres */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <Button variant="outline" className="rounded-full">
          Toutes les épreuves
        </Button>
        <Button variant="outline" className="rounded-full">
          VTT
        </Button>
        <Button variant="outline" className="rounded-full">
          Route
        </Button>
        <Button variant="outline" className="rounded-full">
          Gravel
        </Button>
        <Button variant="outline" className="rounded-full">
          Familial
        </Button>
      </div>

      {/* Liste des épreuves */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {epreuves.map((epreuve) => (
          <div
            key={epreuve.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={epreuve.image}
                alt={epreuve.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                {epreuve.difficulty}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{epreuve.title}</h3>
                <span className="text-primary font-semibold">
                  {epreuve.type}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  {epreuve.distance}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  {epreuve.denivele}
                </div>
              </div>

              <p className="text-gray-600 mb-4">{epreuve.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Catégories :</h4>
                <div className="flex flex-wrap gap-2">
                  {epreuve.categories.map((category) => (
                    <span
                      key={category}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild className="flex-1">
                  <Link href={`/epreuves/${epreuve.id}`}>
                    Voir l&apos;épreuve
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href={`/epreuves/${epreuve.id}/inscription`}>
                    S&apos;inscrire
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

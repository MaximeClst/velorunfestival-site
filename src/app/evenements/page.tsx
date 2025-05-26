import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Données temporaires pour les événements
const events = [
  {
    id: 1,
    title: "Marathon VTT",
    date: "15 Juin 2024",
    location: "Forêt de Fontainebleau",
    description:
      "Une course exigeante à travers les plus beaux sentiers de la région. Parcours de 42km avec 800m de dénivelé positif.",
    image: "/images/departement-reunion.png",
    difficulty: "Difficile",
    price: "45€",
  },
  {
    id: 2,
    title: "Enduro Challenge",
    date: "22 Juin 2024",
    location: "Massif des Vosges",
    description:
      "Un défi technique pour les amateurs de descente et de sensations fortes. 5 spéciales chronométrées.",
    image: "/images/departement-reunion.png",
    difficulty: "Expert",
    price: "55€",
  },
  {
    id: 3,
    title: "Course Familiale",
    date: "29 Juin 2024",
    location: "Parc de la Villette",
    description:
      "Une journée conviviale pour toute la famille avec des parcours adaptés à tous les niveaux.",
    image: "/images/departement-reunion.png",
    difficulty: "Facile",
    price: "15€",
  },
  {
    id: 4,
    title: "Gravel Explorer",
    date: "6 Juillet 2024",
    location: "Vallée de la Loire",
    description:
      "Découvrez les chemins de campagne et les petites routes tranquilles. Parcours de 60km sur chemins et routes.",
    image: "/images/departement-reunion.png",
    difficulty: "Intermédiaire",
    price: "35€",
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* En-tête de la page */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos Événements</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez tous nos événements cyclistes à venir. Des courses pour tous
          les niveaux, des défis techniques aux parcours familiaux.
        </p>
      </div>

      {/* Filtres */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <Button variant="outline" className="rounded-full">
          Tous les événements
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

      {/* Liste des événements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                {event.difficulty}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <span className="text-primary font-semibold">
                  {event.price}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {event.date}
              </div>
              <div className="flex items-center text-gray-600 mb-4">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {event.location}
              </div>
              <p className="text-gray-600 mb-6">{event.description}</p>
              <div className="flex gap-4">
                <Button asChild className="flex-1">
                  <Link href={`/evenements/${event.id}`}>
                    Voir l&apos;événement
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href={`/evenements/${event.id}/inscription`}>
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

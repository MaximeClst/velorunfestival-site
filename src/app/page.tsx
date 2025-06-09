import CarouselPartenaires from "@/components/carousel-partenaires";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        {/* Image Hero */}
        <div className="h-screen relative">
          <Image
            src="/images/velorun affiche v5.png"
            alt="Affiche VeloRun Festival"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Contenu */}
        <div className="bg-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Velo Run Festival
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Vivez l&apos;expérience unique des courses cyclistes dans une
              ambiance festive
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/evenements">Voir les événements</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white text-black hover:text-black backdrop-blur-sm"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation de l'association */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Notre Association</h2>
            <p className="text-lg text-gray-600 mb-8">
              VeloRunFestival est une association dédiée à la promotion du
              cyclisme à travers des événements sportifs et festifs de La
              Réunion. Notre mission est de créer des moments inoubliables où
              sport et convivialité se rencontrent.
            </p>
            <Button asChild variant="outline">
              <Link href="/a-propos">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Pourquoi participer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi participer ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Convivialité</h3>
              <p className="text-gray-600">
                Partagez des moments inoubliables avec d&apos;autres passionnés
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sport</h3>
              <p className="text-gray-600">
                Défiez-vous sur des parcours adaptés à tous les niveaux
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Découverte</h3>
              <p className="text-gray-600">
                Explorez de nouveaux parcours et paysages magnifiques
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Challenge</h3>
              <p className="text-gray-600">
                Relevez des défis personnels et repoussez vos limites
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Événements à venir */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Événements à venir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/departement-reunion.png"
                  alt="Marathon VTT"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Marathon VTT</h3>
                <p className="text-gray-600 mb-4">15 Juin 2024</p>
                <p className="text-gray-600 mb-4">
                  Une course exigeante à travers les plus beaux sentiers de la
                  région.
                </p>
                <Button asChild className="w-full">
                  <Link href="/evenements/marathon-vtt">
                    Voir l&apos;événement
                  </Link>
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/departement-reunion.png"
                  alt="Enduro Challenge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Enduro Challenge</h3>
                <p className="text-gray-600 mb-4">22 Juin 2024</p>
                <p className="text-gray-600 mb-4">
                  Un défi technique pour les amateurs de descente et de
                  sensations fortes.
                </p>
                <Button asChild className="w-full">
                  <Link href="/evenements/enduro-challenge">
                    Voir l&apos;événement
                  </Link>
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/departement-reunion.png"
                  alt="Course Familiale"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Course Familiale</h3>
                <p className="text-gray-600 mb-4">29 Juin 2024</p>
                <p className="text-gray-600 mb-4">
                  Une journée conviviale pour toute la famille avec des parcours
                  adaptés.
                </p>
                <Button asChild className="w-full">
                  <Link href="/evenements/course-familiale">
                    Voir l&apos;événement
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CarouselPartenaires />
    </>
  );
}

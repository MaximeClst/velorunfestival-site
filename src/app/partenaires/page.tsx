import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function PartenairesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos Partenaires
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600">
            Découvrez les entreprises et organisations qui nous accompagnent
            dans l&apos;organisation de nos événements cyclistes à La Réunion
          </p>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Partenaires Officiels
          </h2>

          {/* Partenaire 1 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/departement-reunion.png"
                  alt="Partenaire Premium"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Partenaire Premium</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Notre partenaire principal qui nous accompagne depuis le début
                  de notre aventure. Grâce à leur soutien, nous pouvons
                  organiser des événements de qualité et offrir une expérience
                  exceptionnelle à tous nos participants.
                </p>
                <p className="text-gray-600 mb-8">
                  Leur expertise dans le domaine du sport et leur engagement
                  envers la communauté cycliste de La Réunion font d&apos;eux un
                  partenaire de choix pour VeloRunFestival.
                </p>
                <div className="space-x-4">
                  <Button asChild>
                    <Link href="/partenaires/partenaire-premium">
                      En savoir plus
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://example.com" target="_blank">
                      Visiter le site
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Partenaire 2 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold mb-4">
                  Partenaire Technique
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Spécialiste en équipements et matériel cycliste, ce partenaire
                  nous fournit les meilleurs produits pour garantir la sécurité
                  et le confort de tous nos participants.
                </p>
                <p className="text-gray-600 mb-8">
                  Leur connaissance approfondie du matériel cycliste et leur
                  service client exceptionnel nous permettent d&apos;offrir une
                  expérience optimale lors de nos événements.
                </p>
                <div className="space-x-4">
                  <Button asChild>
                    <Link href="/partenaires/partenaire-technique">
                      En savoir plus
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://example.com" target="_blank">
                      Visiter le site
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
                <Image
                  src="/images/departement-reunion.png"
                  alt="Partenaire Technique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Partenaire 3 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/departement-reunion.png"
                  alt="Partenaire Logistique"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Partenaire Logistique
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Expert en organisation et logistique, ce partenaire nous aide
                  à coordonner tous les aspects de nos événements, de la
                  planification à l&apos;exécution.
                </p>
                <p className="text-gray-600 mb-8">
                  Leur expertise garantit que chaque détail est pris en compte
                  pour offrir une expérience fluide et professionnelle à tous
                  les participants de nos événements cyclistes.
                </p>
                <div className="space-x-4">
                  <Button asChild>
                    <Link href="/partenaires/partenaire-logistique">
                      En savoir plus
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://example.com" target="_blank">
                      Visiter le site
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Devenir Partenaire */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Devenir Partenaire</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Vous souhaitez nous accompagner dans l&apos;organisation de nos
            événements cyclistes ? Découvrez nos différentes formules de
            partenariat et rejoignez notre équipe.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

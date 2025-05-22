"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg text-gray-600">
            Vous avez des questions ? Vous souhaitez devenir bénévole ?
            N&apos;hésitez pas à nous contacter !
          </p>
        </div>

        <Tabs defaultValue="contact" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="contact">Formulaire de contact</TabsTrigger>
            <TabsTrigger value="benevole">Devenir bénévole</TabsTrigger>
          </TabsList>

          <TabsContent value="contact">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" placeholder="Votre nom" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Sujet de votre message" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Votre message"
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="benevole">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="benevoleFirstName">Prénom</Label>
                  <Input id="benevoleFirstName" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="benevoleLastName">Nom</Label>
                  <Input id="benevoleLastName" placeholder="Votre nom" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="benevoleEmail">Email</Label>
                <Input
                  id="benevoleEmail"
                  type="email"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="benevolePhone">Téléphone</Label>
                <Input
                  id="benevolePhone"
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="benevoleMessage">
                  Disponibilités et motivations
                </Label>
                <Textarea
                  id="benevoleMessage"
                  placeholder="Décrivez vos disponibilités et pourquoi vous souhaitez devenir bénévole"
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full">
                Devenir bénévole
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        {/* Informations de contact */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contact@velorunfestival.fr</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
            <p className="text-gray-600">+33 X XX XX XX XX</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Adresse</h3>
            <p className="text-gray-600">
              [Adresse de l&apos;association]
              <br />
              [Code postal] [Ville]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

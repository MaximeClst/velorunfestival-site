export default function Hero() {
  return (
    <section className="py-8 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">
        Le rendez-vous convivial et familial{" "}
        <span className="text-yellow-600">ouvert à tous</span>
      </h2>
      <p className="text-center text-lg mb-4">
        Mettant en avant les paysages de l&apos;île depuis{" "}
        <strong>Trois-Bassins</strong>
      </p>

      <div className="mb-6">
        <p>
          <strong>Le VELORUN FESTIVAL</strong> est un événement sportif et
          touristique majeur qui se déroule à Trois-Bassins, dans les hauts de
          l&apos;ouest et au cœur de la forêt des Hauts sous le vent.
        </p>
        <p className="mt-2">
          Il met en avant le <strong>VTT sous toutes ses formes</strong> et
          attire un large public, des amateurs aux sportifs confirmés.
        </p>
        <p className="mt-2">
          Son <span className="font-semibold">format unique</span> permet à
          chaque participant de choisir son propre défi avec des parcours
          adaptés à tous les niveaux.
        </p>
      </div>

      <div className="mb-6 bg-gray-50 rounded-xl p-4 shadow">
        <h3 className="font-semibold text-lg mb-1 text-yellow-700">
          Bien plus qu&apos;une course&nbsp;!
        </h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Un <strong>circuit jeunes</strong> et une <strong>randonnée</strong>{" "}
            pour tous les âges.
          </li>
          <li>
            Un <strong>village animé</strong> pour découvrir l&apos;univers du
            vélo et profiter pleinement du site.
          </li>
          <li>
            Un espace pour tous avec de nombreux <strong>exposants</strong> :
            <ul className="list-disc ml-6">
              <li>cyclisme</li>
              <li>bien-être</li>
              <li>alimentation</li>
              <li>expositions vélos</li>
              <li>fitness &amp; sciences</li>
            </ul>
          </li>
          <li>
            Des <strong>artistes locaux</strong> pour rythmer la journée et
            créer une ambiance festive.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-1 text-yellow-700">
          Qui sommes-nous ?
        </h3>
        <p>
          Le <strong>Comité Régional de Cyclisme de La Réunion</strong>{" "}
          (association loi 1901) est constitué par décision de la Fédération
          Française de Cyclisme (FFC). Il encourage et organise le cyclisme sous
          toutes ses formes à La Réunion, avec des valeurs sociales, éducatives
          et citoyennes.
        </p>
        <p className="mt-2">
          Son objectif :{" "}
          <span className="font-semibold">
            défendre les intérêts des cyclistes, encourager les initiatives
            locales et fédérer les passionnés de vélo sur tout le territoire
            réunionnais.
          </span>
        </p>
        <p className="mt-2">
          Depuis le 1<sup>er</sup> janvier 2025, <strong>Karine DUDON</strong>{" "}
          préside le comité.
        </p>
      </div>

      <div className="mb-6 bg-gray-50 rounded-xl p-4 shadow">
        <h3 className="font-semibold text-lg mb-1 text-yellow-700">
          Des bénévoles investis
        </h3>
        <p>
          Plus d&apos;une dizaine de bénévoles œuvrent toute l&apos;année à
          l&apos;organisation du Velorun Festival. Leur engagement et leur
          passion sont la clé du succès de l&apos;événement : ils vous préparent
          un week-end de vélo <strong>unique et inoubliable&nbsp;!</strong>
        </p>
      </div>
    </section>
  );
}

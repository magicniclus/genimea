/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

// Définir les types pour les langues et le contenu
type Language = "FR" | "EN";

const MentionsLegalesContent = () => {
  const [selectedLang, setSelectedLang] = useState<Language>("FR");
  const searchParams = useSearchParams();

  // Update the language state based on URL search parameters
  useEffect(() => {
    const lang = searchParams?.get("lang");
    if (lang === "FR" || lang === "EN") {
      setSelectedLang(lang);
    }
  }, [searchParams]);

  const contentFr = () => {
    return (
      <>
        <Nav />
        <main>
          <section className="py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 text-slate-700 flex flex-col items-center">
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl max-w-[70%qd]">
                Mentions Légales
              </h1>
              <div className="w-full mt-16 text-sm">
                <h3 className="text-lg font-semibold mt-7">
                  Engagement envers la protection des droits individuels
                </h3>
                <p className="mt-3">
                  Chez Genimea, nous accordons une grande importance à la
                  protection des droits individuels, notamment en ce qui
                  concerne les traitements automatisés et la transparence envers
                  nos utilisateurs. Nous avons développé une politique claire
                  détaillant les traitements de données effectués, les objectifs
                  de ces traitements, ainsi que les moyens à la disposition des
                  utilisateurs pour exercer leurs droits efficacement.
                </p>
                <p className="mt-3">
                  Pour plus d&apos;informations sur la protection de vos données
                  personnelles, nous vous invitons à visiter le site de la CNIL
                  : https://www.cnil.fr/
                </p>
                <p className="mt-3">
                  La navigation sur genimea.com implique l&apos;acceptation
                  intégrale et sans réserve des conditions d&apos;utilisation en
                  vigueur. La version actuelle de ces conditions reste
                  applicable tant qu&apos;elle n&apos;est pas remplacée par une
                  nouvelle version.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 1 - Informations légales
                </h3>
                <p className="mt-3">Éditeur du site :</p>
                <p className="mt-3">
                  Le site genimea.com est édité par Genimea, située au : 22 rue
                  de Libourne, 33100 Bordeaux, France.
                </p>
                <p className="mt-3">Hébergement :</p>
                <p className="mt-3">
                  L&apos;hébergement du site est assuré par Amazon Web Services,
                  Inc., situé au P.O. Box 81226, Seattle, WA 98108-1226.
                </p>
                <p className="mt-3">
                  Le directeur de la publication est Nicolas Catera.
                </p>

                <h3 className="text-lg font-semibold mt-7">
                  Article 2 - Accès au site
                </h3>
                <p className="mt-3">
                  L&apos;accès et l&apos;utilisation de genimea.com sont
                  destinés à un usage personnel uniquement. Il est interdit
                  d&apos;utiliser ce site et les informations qu&apos;il
                  contient à des fins commerciales, politiques ou publicitaires,
                  y compris toute forme de démarchage, tel que l&apos;envoi de
                  courriels non sollicités.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 3 - Propriété intellectuelle
                </h3>
                <p className="mt-3">
                  Les marques, photographies, textes, commentaires,
                  illustrations, images, vidéos, sons et applications
                  informatiques utilisés pour le fonctionnement de genimea.com,
                  ainsi que tous les éléments reproduits ou utilisés sur le
                  site, sont protégés par les lois sur la propriété
                  intellectuelle et appartiennent à l&apos;éditeur Genimea ou à
                  ses partenaires. Toute reproduction, représentation,
                  modification ou adaptation de ces éléments sans
                  l&apos;autorisation préalable et écrite de Genimea est
                  strictement interdite.
                </p>
                <p className="mt-3">
                  L&apos;absence d&apos;action immédiate de Genimea en cas de
                  connaissance d&apos;utilisation non autorisée ne constitue pas
                  une acceptation de ces usages ni une renonciation à engager
                  des poursuites.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 4 - Administration du site
                </h3>
                <p className="mt-3">
                  Pour assurer une gestion efficace du site, Genimea se réserve
                  le droit de :
                </p>
                <p className="mt-3">
                  Suspendre, interrompre ou limiter l&apos;accès à la totalité
                  ou une partie du site, restreindre l&apos;accès au site à
                  certaines catégories d&apos;utilisateurs ; Supprimer toute
                  information pouvant perturber le fonctionnement du site ou
                  enfreindre les lois nationales ou internationales ; Suspendre
                  le site pour des mises à jour.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 5 - Responsabilité de l’utilisateur
                </h3>
                <p className="mt-3">
                  L&apos;utilisateur assume l&apos;entière responsabilité de
                  l&apos;utilisation du site et de son matériel de connexion. Il
                  incombe à l&apos;utilisateur de protéger son matériel et ses
                  données, notamment contre les virus informatiques. Genimea ne
                  peut être tenu responsable des dommages résultant de
                  l&apos;utilisation du site ou de l&apos;impossibilité
                  d&apos;accéder à ce dernier.
                </p>
                <p className="mt-3">
                  La responsabilité de Genimea ne peut être engagée en cas de
                  poursuites judiciaires à l&apos;encontre de l&apos;utilisateur
                  :
                </p>
                <p className="mt-3">
                  Du fait de l&apos;usage du site ; Du fait du non-respect par
                  l&apos;utilisateur des présentes mentions légales.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 6 - Liens hypertextes
                </h3>
                <p className="mt-3">
                  Toute création de liens hypertextes vers une partie quelconque
                  du site genimea.com est soumise à l&apos;autorisation
                  préalable et écrite de Genimea. Cette autorisation peut être
                  retirée à tout moment sans justification.
                </p>
                <p className="mt-3">
                  Genimea n&apos;est pas responsable du contenu ni de la gestion
                  des sites vers lesquels des liens hypertextes pourraient
                  renvoyer à partir de son site.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 7 - Protection et traitement des données personnelles
                </h3>
                <p className="mt-3">
                  Les données personnelles recueillies sur genimea.com incluent
                  :
                </p>
                <p className="mt-3">
                  Nom, prénom ; Adresse postale ; Adresse électronique ; Numéro
                  de téléphone ; Date de naissance ; Données financières pour le
                  traitement des commandes.
                </p>
                <p className="mt-3">
                  Ces données sont collectées dans le but de gérer la relation
                  avec nos utilisateurs et le traitement des commandes.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 8 - Droits des utilisateurs sur leurs données
                </h3>
                <p className="mt-3">
                  Conformément à la réglementation en vigueur, les utilisateurs
                  de genimea.com disposent des droits suivants concernant leurs
                  données personnelles :
                </p>
                <p className="mt-3">
                  Droit d&apos;accès ; Droit de rectification ; Droit de
                  suppression ; Droit à la limitation du traitement ; Droit
                  d&apos;opposition au traitement ; Droit à la portabilité des
                  données.
                </p>
                <p className="mt-3">
                  Pour exercer ces droits, veuillez contacter Genimea à
                  l&apos;adresse électronique suivante : support@genimea.com,
                  accompagné d&apos;une copie d&apos;un titre d&apos;identité
                  valide.
                </p>
                <p className="mt-3">
                  Les demandes seront traitées dans un délai d&apos;un mois,
                  pouvant être prolongé de deux mois en fonction de la
                  complexité et du nombre de demandes.
                </p>
                <p className="mt-3">
                  Les utilisateurs ont également le droit de définir des
                  directives relatives à la gestion de leurs données après leur
                  décès et peuvent introduire une réclamation auprès de la CNIL.
                </p>
                <p className="mt-3">
                  Nous encourageons nos utilisateurs à nous contacter en premier
                  lieu en cas de préoccupation concernant la gestion de leurs
                  données personnelles.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 9 - Finalité de l’utilisation des données
                </h3>
                <p className="mt-3">
                  Les données personnelles collectées auprès des utilisateurs de
                  genimea.com visent à :
                </p>
                <p className="mt-3">
                  Faciliter l&apos;accès et l&apos;utilisation de la plateforme
                  ; Optimiser et sécuriser le fonctionnement de la plateforme ;
                  Offrir une assistance personnalisée aux utilisateurs ;
                  Authentifier les informations fournies par les utilisateurs ;
                  Personnaliser l&apos;expérience utilisateur et proposer des
                  publicités ciblées selon les préférences et l&apos;historique
                  de navigation ; Prévenir les fraudes et gérer les incidents de
                  sécurité ; Gérer les relations avec les utilisateurs et
                  résoudre les éventuels litiges ; Communiquer sur les offres
                  commerciales en lien avec les préférences de
                  l&apos;utilisateur.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 10 - Conservation des données
                </h3>
                <p className="mt-3">
                  Genimea conserve les données personnelles des utilisateurs
                  pour la période nécessaire à la fourniture de ses services.
                  Afin de respecter nos obligations légales ou pour résoudre des
                  litiges et prévenir les abus, certaines données peuvent être
                  conservées même après la clôture d&apos;un compte ou
                  l&apos;inactivité de l&apos;utilisateur sur la plateforme.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 11 - Partage des données personnelles
                </h3>
                <p className="mt-3">
                  Les données personnelles peuvent être partagées au sein de
                  l&apos;UE dans les situations suivantes :
                </p>
                <p className="mt-3">
                  Lors de l&apos;utilisation de services de paiement,
                  nécessitant la collaboration avec des établissements bancaires
                  tiers ; Lorsque les utilisateurs divulguent des informations
                  dans des espaces publics de la plateforme ; Avec des
                  prestataires tiers assurant l&apos;assistance utilisateur, la
                  publicité, et les services de paiement sous strictes
                  conditions contractuelles de respect de la confidentialité ;
                  Si requis par la loi, pour répondre aux réclamations ou se
                  conformer aux procédures légales.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 12 - Communications commerciales
                </h3>
                <p className="mt-3">
                  Les utilisateurs de genimea.com peuvent recevoir des offres
                  commerciales de notre part ou refuser de recevoir ces
                  communications en suivant le lien de désabonnement fourni. Les
                  données pourront être utilisées par des partenaires
                  sélectionnés pour des propositions commerciales, sauf
                  opposition de votre part.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 13 - Cookies
                </h3>
                <p className="mt-3">
                  Les cookies améliorent l&apos;expérience utilisateur sur notre
                  site en personnalisant le contenu et les annonces, en
                  fournissant des fonctionnalités de médias sociaux et en
                  analysant notre trafic. Les utilisateurs peuvent gérer leurs
                  préférences de cookies via leur navigateur.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 14 - Représentation des produits
                </h3>
                <p className="mt-3">
                  Les images et descriptions des services ou produits sur
                  genimea.com sont fournies à titre indicatif et ne sauraient
                  engager contractuellement Genimea.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 15 - Loi applicable
                </h3>
                <p className="mt-3">
                  Les conditions d&apos;utilisation de genimea.com sont régies
                  par la loi française et tout litige relatif à ces conditions
                  sera soumis à la juridiction des tribunaux compétents de
                  Bordeaux.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 16 - Nous contacter
                </h3>
                <p className="mt-3">
                  Pour toute question ou demande, les utilisateurs peuvent
                  contacter Genimea par email à support@genimea.com ou par
                  courrier au 22 rue de Libourne, 33100 Bordeaux, France.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  };

  const contentEn = () => {
    return (
      <>
        <Nav />
        <main>
          <section className="py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 text-slate-700 flex flex-col items-center">
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl max-w-[70%qd]">
                Mentions Légales
              </h1>
              <div className="w-full mt-16 text-sm">
                <h3 className="text-lg font-semibold mt-7">
                  Engagement envers la protection des droits individuels
                </h3>
                <p className="mt-3">
                  Chez Genimea, nous accordons une grande importance à la
                  protection des droits individuels, notamment en ce qui
                  concerne les traitements automatisés et la transparence envers
                  nos utilisateurs. Nous avons développé une politique claire
                  détaillant les traitements de données effectués, les objectifs
                  de ces traitements, ainsi que les moyens à la disposition des
                  utilisateurs pour exercer leurs droits efficacement.
                </p>
                <p className="mt-3">
                  Pour plus d&apos;informations sur la protection de vos données
                  personnelles, nous vous invitons à visiter le site de la CNIL
                  : https://www.cnil.fr/
                </p>
                <p className="mt-3">
                  La navigation sur genimea.com implique l&apos;acceptation
                  intégrale et sans réserve des conditions d&apos;utilisation en
                  vigueur. La version actuelle de ces conditions reste
                  applicable tant qu&apos;elle n&apos;est pas remplacée par une
                  nouvelle version.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 1 - Informations légales
                </h3>
                <p className="mt-3">Éditeur du site :</p>
                <p className="mt-3">
                  Le site genimea.com est édité par Genimea, située au : 22 rue
                  de Libourne, 33100 Bordeaux, France.
                </p>
                <p className="mt-3">Hébergement :</p>
                <p className="mt-3">
                  L&apos;hébergement du site est assuré par Amazon Web Services,
                  Inc., situé au P.O. Box 81226, Seattle, WA 98108-1226.
                </p>
                <p className="mt-3">
                  Le directeur de la publication est Nicolas Catera.
                </p>

                <h3 className="text-lg font-semibold mt-7">
                  Article 2 - Accès au site
                </h3>
                <p className="mt-3">
                  L&apos;accès et l&apos;utilisation de genimea.com sont
                  destinés à un usage personnel uniquement. Il est interdit
                  d&apos;utiliser ce site et les informations qu&apos;il
                  contient à des fins commerciales, politiques ou publicitaires,
                  y compris toute forme de démarchage, tel que l&apos;envoi de
                  courriels non sollicités.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 3 - Propriété intellectuelle
                </h3>
                <p className="mt-3">
                  Les marques, photographies, textes, commentaires,
                  illustrations, images, vidéos, sons et applications
                  informatiques utilisés pour le fonctionnement de genimea.com,
                  ainsi que tous les éléments reproduits ou utilisés sur le
                  site, sont protégés par les lois sur la propriété
                  intellectuelle et appartiennent à l&apos;éditeur Genimea ou à
                  ses partenaires. Toute reproduction, représentation,
                  modification ou adaptation de ces éléments sans
                  l&apos;autorisation préalable et écrite de Genimea est
                  strictement interdite.
                </p>
                <p className="mt-3">
                  L&apos;absence d&apos;action immédiate de Genimea en cas de
                  connaissance d&apos;utilisation non autorisée ne constitue pas
                  une acceptation de ces usages ni une renonciation à engager
                  des poursuites.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 4 - Administration du site
                </h3>
                <p className="mt-3">
                  Pour assurer une gestion efficace du site, Genimea se réserve
                  le droit de :
                </p>
                <p className="mt-3">
                  Suspendre, interrompre ou limiter l&apos;accès à la totalité
                  ou une partie du site, restreindre l&apos;accès au site à
                  certaines catégories d&apos;utilisateurs ; Supprimer toute
                  information pouvant perturber le fonctionnement du site ou
                  enfreindre les lois nationales ou internationales ; Suspendre
                  le site pour des mises à jour.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 5 - Responsabilité de l’utilisateur
                </h3>
                <p className="mt-3">
                  L&apos;utilisateur assume l&apos;entière responsabilité de
                  l&apos;utilisation du site et de son matériel de connexion. Il
                  incombe à l&apos;utilisateur de protéger son matériel et ses
                  données, notamment contre les virus informatiques. Genimea ne
                  peut être tenu responsable des dommages résultant de
                  l&apos;utilisation du site ou de l&apos;impossibilité
                  d&apos;accéder à ce dernier.
                </p>
                <p className="mt-3">
                  La responsabilité de Genimea ne peut être engagée en cas de
                  poursuites judiciaires à l&apos;encontre de l&apos;utilisateur
                  :
                </p>
                <p className="mt-3">
                  Du fait de l&apos;usage du site ; Du fait du non-respect par
                  l&apos;utilisateur des présentes mentions légales.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 6 - Liens hypertextes
                </h3>
                <p className="mt-3">
                  Toute création de liens hypertextes vers une partie quelconque
                  du site genimea.com est soumise à l&apos;autorisation
                  préalable et écrite de Genimea. Cette autorisation peut être
                  retirée à tout moment sans justification.
                </p>
                <p className="mt-3">
                  Genimea n&apos;est pas responsable du contenu ni de la gestion
                  des sites vers lesquels des liens hypertextes pourraient
                  renvoyer à partir de son site.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 7 - Protection et traitement des données personnelles
                </h3>
                <p className="mt-3">
                  Les données personnelles recueillies sur genimea.com incluent
                  :
                </p>
                <p className="mt-3">
                  Nom, prénom ; Adresse postale ; Adresse électronique ; Numéro
                  de téléphone ; Date de naissance ; Données financières pour le
                  traitement des commandes.
                </p>
                <p className="mt-3">
                  Ces données sont collectées dans le but de gérer la relation
                  avec nos utilisateurs et le traitement des commandes.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 8 - Droits des utilisateurs sur leurs données
                </h3>
                <p className="mt-3">
                  Conformément à la réglementation en vigueur, les utilisateurs
                  de genimea.com disposent des droits suivants concernant leurs
                  données personnelles :
                </p>
                <p className="mt-3">
                  Droit d&apos;accès ; Droit de rectification ; Droit de
                  suppression ; Droit à la limitation du traitement ; Droit
                  d&apos;opposition au traitement ; Droit à la portabilité des
                  données.
                </p>
                <p className="mt-3">
                  Pour exercer ces droits, veuillez contacter Genimea à
                  l&apos;adresse électronique suivante : support@genimea.com,
                  accompagné d&apos;une copie d&apos;un titre d&apos;identité
                  valide.
                </p>
                <p className="mt-3">
                  Les demandes seront traitées dans un délai d&apos;un mois,
                  pouvant être prolongé de deux mois en fonction de la
                  complexité et du nombre de demandes.
                </p>
                <p className="mt-3">
                  Les utilisateurs ont également le droit de définir des
                  directives relatives à la gestion de leurs données après leur
                  décès et peuvent introduire une réclamation auprès de la CNIL.
                </p>
                <p className="mt-3">
                  Nous encourageons nos utilisateurs à nous contacter en premier
                  lieu en cas de préoccupation concernant la gestion de leurs
                  données personnelles.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 9 - Finalité de l’utilisation des données
                </h3>
                <p className="mt-3">
                  Les données personnelles collectées auprès des utilisateurs de
                  genimea.com visent à :
                </p>
                <p className="mt-3">
                  Faciliter l&apos;accès et l&apos;utilisation de la plateforme
                  ; Optimiser et sécuriser le fonctionnement de la plateforme ;
                  Offrir une assistance personnalisée aux utilisateurs ;
                  Authentifier les informations fournies par les utilisateurs ;
                  Personnaliser l&apos;expérience utilisateur et proposer des
                  publicités ciblées selon les préférences et l&apos;historique
                  de navigation ; Prévenir les fraudes et gérer les incidents de
                  sécurité ; Gérer les relations avec les utilisateurs et
                  résoudre les éventuels litiges ; Communiquer sur les offres
                  commerciales en lien avec les préférences de
                  l&apos;utilisateur.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 10 - Conservation des données
                </h3>
                <p className="mt-3">
                  Genimea conserve les données personnelles des utilisateurs
                  pour la période nécessaire à la fourniture de ses services.
                  Afin de respecter nos obligations légales ou pour résoudre des
                  litiges et prévenir les abus, certaines données peuvent être
                  conservées même après la clôture d&apos;un compte ou
                  l&apos;inactivité de l&apos;utilisateur sur la plateforme.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 11 - Partage des données personnelles
                </h3>
                <p className="mt-3">
                  Les données personnelles peuvent être partagées au sein de
                  l&apos;UE dans les situations suivantes :
                </p>
                <p className="mt-3">
                  Lors de l&apos;utilisation de services de paiement,
                  nécessitant la collaboration avec des établissements bancaires
                  tiers ; Lorsque les utilisateurs divulguent des informations
                  dans des espaces publics de la plateforme ; Avec des
                  prestataires tiers assurant l&apos;assistance utilisateur, la
                  publicité, et les services de paiement sous strictes
                  conditions contractuelles de respect de la confidentialité ;
                  Si requis par la loi, pour répondre aux réclamations ou se
                  conformer aux procédures légales.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 12 - Communications commerciales
                </h3>
                <p className="mt-3">
                  Les utilisateurs de genimea.com peuvent recevoir des offres
                  commerciales de notre part ou refuser de recevoir ces
                  communications en suivant le lien de désabonnement fourni. Les
                  données pourront être utilisées par des partenaires
                  sélectionnés pour des propositions commerciales, sauf
                  opposition de votre part.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 13 - Cookies
                </h3>
                <p className="mt-3">
                  Les cookies améliorent l&apos;expérience utilisateur sur notre
                  site en personnalisant le contenu et les annonces, en
                  fournissant des fonctionnalités de médias sociaux et en
                  analysant notre trafic. Les utilisateurs peuvent gérer leurs
                  préférences de cookies via leur navigateur.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 14 - Représentation des produits
                </h3>
                <p className="mt-3">
                  Les images et descriptions des services ou produits sur
                  genimea.com sont fournies à titre indicatif et ne sauraient
                  engager contractuellement Genimea.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 15 - Loi applicable
                </h3>
                <p className="mt-3">
                  Les conditions d&apos;utilisation de genimea.com sont régies
                  par la loi française et tout litige relatif à ces conditions
                  sera soumis à la juridiction des tribunaux compétents de
                  Bordeaux.
                </p>
                <h3 className="text-lg font-semibold mt-7">
                  Article 16 - Nous contacter
                </h3>
                <p className="mt-3">
                  Pour toute question ou demande, les utilisateurs peuvent
                  contacter Genimea par email à support@genimea.com ou par
                  courrier au 22 rue de Libourne, 33100 Bordeaux, France.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  };

  return selectedLang === "FR" ? contentFr() : contentEn();
};

const page = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen bg-slate-50 flex justify-center items-center animate-pulse duration-2000 ease-in-out">
          <img src="/logo.png" alt="logo" className="w-20 h-auto" />
        </div>
      }
    >
      <MentionsLegalesContent />
    </Suspense>
  );
};

export default page;

# Sujet de projet - Gallais Florian

L'objectif du  projet est de partir d’une application Web existante front est d’y ajouter une fonctionnalité. NOus avons eu le choix entre plusieurs applications déjà existantes mais j'ai choisi le doodle de création de réunions.

## Fonctionnalités -

La fonctionnalité que j'ai ajouter à ce doodle à été un générateur d'idées d'activitées. J'ai imaginé que ça irai plutôt bien avec l'objectif du projet existant, qui est de partager des réunions, et que pouvoir trouver des activités rapidement en fonction du nombre de participant a la réunion pouvais être une bonne idées. Pour cela j'ai implémenté l'api boredAPI qui fournis des activitées en fonctions des participants.


## Comment utiliser -
1. Clonez ce projet.
2. Assurez-vous que les dépendances nécessaires sont installées (`npm install`).
3. Vous pourrez alors le lancer en utilisant la commande : `npm start`


## Difficultés rencontrées -

L'api boredAPI n'a pas été d'une grande difficultée a implémenté grâce au premier tp sur angular qui appelait luis aussi une api. Cependant avant de choisir cette api, j'était parti sur l'idée d'utiliser l'api Eventbrite qui aurait pu me fournir les événements qui étaient organiser dans une zone géographique mais malheureusement je n'ai jamais réussi a faire fonctionner mes requêtes avec mon token privé. J'ai aussi voulu utiliser l'api weatherstack mais malheureseument en essai gratuit on ne peut pas afficher le résutlat sur une page http.


## Liens utiles -

- la documentation de [boredAPI](https://www.boredapi.com/documentation)
- la documentation de [weatherstack](https://weatherstack.com/documentation)
- la documentation de [enventbrite](https://www.eventbrite.com/platform/api)
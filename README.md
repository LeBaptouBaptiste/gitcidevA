Projet CI/CD – Gestion des conflits Git et application des GitHub Actions


Auteurs :


Baptiste Vidal

Kelvin Chauvel



Description


Petit projet Node.js servant de support pédagogique pour :

Mettre en place une CI (GitHub Actions).

Créer et résoudre des conflits Git sur différentes branches.

Écrire quelques fonctions simples (addTask, toggleTask, findTask) et leurs tests.



Commandes utiles

Installation :
npm install

Lancer les tests :
npm test



Git – différences conceptuelles


switch vs checkout

git switch : commande servant a changer/créer une branche.

git checkout : commande servant à la fois a changer/créer une branche, sert aussi à revenir sur des commits précis.


pull vs fetch

git fetch : récupère les commits distants sans les fusionner aux fichiers locaux.

git pull : récupère les commits distants et les fusionnes aux fichiers llcaux.


rebase vs revert

git rebase : reviens sur un commit précis en l'écrasant avec ses moifications (réécrit l’historique).

git revert : crée un nouveau commit qui annule les changements d’un commit précis (historique conservé).



Git – commandes explications

tag

Permet de marquer un commit spécifique (ex: une version).
git tag v1.0.0
git push origin v1.0.0


stash

Met de côté les modifications actuels sans les commits et permet d'aller sur d'autres branches puis de revenir en retrouvant les modifications non commit qu'on avait laissé.


release

Une “release” est basée sur un tag et fournit un paquet/artefact versionné.
Exemple : créer une release v1.0.0 à partir du tag v1.0.0
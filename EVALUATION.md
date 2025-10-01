# Evaluation Baptiste Vidal : 

## Depot
Lien vers le dépot : [Dépot](https://github.com/LeBaptouBaptiste/gitcidevA)
N.B : Vous êtes collaborateur du projet afin de pouvoir accéder a tout

## Pull Requests
[PR N° 1 ](https://github.com/LeBaptouBaptiste/gitcidevA/pull/3)
[PR N° 2](https://github.com/LeBaptouBaptiste/gitcidevA/pull/7)
[PR N° 3 (FAIL)](https://github.com/LeBaptouBaptiste/gitcidevA/pull/8)
[PR N° 4](https://github.com/LeBaptouBaptiste/gitcidevA/pull/9)
[PR N° 5 (Merge into main)](https://github.com/LeBaptouBaptiste/gitcidevA/pull/10)

## Git – différences conceptuelles


### Switch vs Checkout
`git switch` : commande servant a changer/créer une branche.

`git checkout` : commande servant à la fois a changer/créer une branche, sert aussi à revenir sur des commits précis.


### Pull vs Fetch

`git fetch` : récupère les commits distants sans les fusionner aux fichiers locaux.

`git pull` : récupère les commits distants et les fusionnes aux fichiers llcaux.


### Rebase vs Revert

`git rebase` : reviens sur un commit précis en l'écrasant avec ses moifications (réécrit l’historique).

`git revert` : crée un nouveau commit qui annule les changements d’un commit précis (historique conservé).



## Git – commandes explications

`tag`

Permet de marquer un commit spécifique (ex: une version).
```bash
git tag v1.0.0
git push origin v1.0.0
```

`stash`

Met de côté les modifications actuels sans les commits et permet d'aller sur d'autres branches puis de revenir en retrouvant les modifications non commit qu'on avait laissé.


`release`

Une “release” est basée sur un tag et fournit un paquet/artefact versionné.
Exemple : créer une release v1.0.0 à partir du tag v1.0.0

## Readme
Le Readme est dans la branche [main](https://github.com/LeBaptouBaptiste/gitcidevA) du répo
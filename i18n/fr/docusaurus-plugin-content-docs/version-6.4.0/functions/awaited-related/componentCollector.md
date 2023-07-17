---
title: '$componentCollector'
description: '$componentCollector va créer un collecteur pour les composants donnés.'
id: componentCollector
---

`$componentCollector` va créer un collecteur pour les composants donnés.

## Utilisation

```php
$componentCollector[IDmessage;filtreUtilisateur;temps;IDpersonnalisé;commandes;messageD'erreu?;finCommande?;donnéesAttendues?]
```

## Paramètres

| Champ             | Type                 | Description                                                                                                                                      | Obligatoire |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |:-----------:|
| IDmessage         | entier               | L'identifiant du message.                                                                                                                        |    vrai     |
| filtreUtilisateur | chaîne de caractère  | À ce que le bot répondra. <br /> 1. **everyone** <br /> 2. **Identifiant spécifique d'utilisateur** - tout identifiant d'utilisateur |    vrai     |
| temps             | chaîne de caractères | Quand la commande se termine/expire.                                                                                                             |    vrai     |
| IDpersonnalisé    | chaîne de caractères | L'ID du composant.                                                                                                                               |    vrai     |
| commandes         | chaîne de caractères | Commandes qui seront exécutées, vous pouvez séparer plusieurs commandes par une virgule ( `,`).                                                  |    vrai     |
| messageD'erreur?  | chaîne de caractères | Message d'erreur lorsque la commande expire.                                                                                                     |    faux     |
| finCommande?      | entier               | Commande de fin qui sera exécutée lorsque les commandes précédentes ont été exécutées.                                                           |    faux     |
| donnéesAttendues? | chaîne de caractère  | Données attendues.                                                                                                                               |    faux     |

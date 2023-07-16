---
title: '$awaitComponents'
description: '$awaitComponents attend les composants pour un nombre donné d''utilisations.'
id: awaitComponents
---

`$awaitComponents` attend les composants pour un nombre donné d'utilisations.

## Utilisation

```php
$awaitComponents[IDmessage;filtreUtilisateur;IDpersonnalisé;commandes;messageD'erreur?;utilisations?;donnéesAttendues?]
```

## Paramètres

| Champ             | Type                 | Description                                                                                                                                      | Obligatoire |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |:-----------:|
| IDmessage         | entier               | ID du message.                                                                                                                                   |    vrai     |
| filtreUtilisateur | chaîne de caractères | À ce que le bot répondra <br /> 1. **everyone** <br /> 2. **Identifiant spécifique d'utilisateur** - tout identifiant d'utilisateur. |    vrai     |
| IDpersonnalisé    | chaîne de caractères | ID personnalisé.                                                                                                                                 |    vrai     |
| commandes         | chaîne de caractères | Commandes qui seront exécutées, vous pouvez séparer plusieurs commandes par une virgule ( `,`)                                                   |    vrai     |
| messageD'erreur?  | chaîne de caractères | Message d'erreur lorsque la commande expire.                                                                                                     |    faux     |
| utilisations?     | entier               | Combien d'utilisations jusqu'à ce que le composant cesse de fonctionner.                                                                         |    faux     |
| donnéesAttendues? | chaîne de caractères | Données attendues.                                                                                                                               |    faux     |
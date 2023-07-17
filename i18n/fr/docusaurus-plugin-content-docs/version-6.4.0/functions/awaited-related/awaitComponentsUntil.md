---
title: '$awaitComponentsUntil'
description: '$awaitComponentsUntil attend des composants de message.'
id: awaitComponentsUntil
---

`$awaitComponentsUntil` attend des composants de message.

## Utilisation

```php
$awaitComponentsUntil[IDsalon;IDmessage;filtreUtilisateur;temps;IDsPersonnalisés;commandes;messageD'erreur?;donnéesAttendues?]
```

## Paramètres

| Champ             | Type                 | Description                                                                                                                                     | Obligatoire |
| ----------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDsalon           | chaîne de caractères | ID du salon.                                                                                                                                    |    vrai     |
| IDmessage         | chaîne de caractères | ID du message.                                                                                                                                  |    vrai     |
| filtreUtilisateur | entier               | À ce que le bot répondra <br /> 1. **everyone** <br /> 2. **Identifiant spécifique d'utilisateur** - tout identifiant d'utilisateur |    vrai     |
| réactions         | chaîne de caractères | Les réactions que le bot écoutera, vous pouvez séparer plusieurs émoticônes par une virgule ( `,`)                                              |    vrai     |
| commandes         | chaîne de caractères | Commandes qui seront exécutées, vous pouvez séparer plusieurs commandes par une virgule ( `,`)                                                  |    vrai     |
| messageD'erreur?  | chaîne de caractères | Message d'erreur lorsque la commande expire.                                                                                                    |    faux     |
| donnéesAttendues? | chaîne de caractères | Données attendues.                                                                                                                              |    faux     |
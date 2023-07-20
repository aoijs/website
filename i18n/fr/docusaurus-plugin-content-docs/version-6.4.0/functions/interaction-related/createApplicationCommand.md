---
title: '$createApplicationCommand'
description: '$createApplicationCommand va créer une commande d''application.'
id: createApplicationCommand
---

`$createApplicationCommand` va créer une commande d'application.

## Utilisation

```php
$createApplicationCommand[IDserveur/global;nom;description;permissionDéfaut;type?;options?]
```

## Paramètres

| Champ             | Type                        | Description                                                                                              | Obligatoire |
| ----------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur/global  | chaîne de caractères entier | Type de commande de l'application. <br/> 1. **global** <br/> 2. **ID spécifique de serveur** |    vrai     |
| nom               | chaîne de caractères        | Le nom de la commande de l'application, doit être en minuscule.                                          |    vrai     |
| description       | chaîne de caractères        | Description de la commande de l'application.                                                             |    vrai     |
| permissionsDéfaut | booléen                     | Si la commande doit suivre les permissions par défaut.                                                   |    vrai     |
| type?             | chaîne de caractères        | Le type de commande de l'application. (slash/user/message)                                               |    Faux     |
| options?          | chaîne de caractères        | Options de la commande de l'application.                                                                 |    Faux     |

<details>
  <summary><h3> Types d'options de commandes d'application </h3></summary>

| NAME                | ID | NOTE                                                                                          |
| ------------------- | -- | --------------------------------------------------------------------------------------------- |
| SUB_COMMAND         | 1  |                                                                                               |
| SUB_COMMAND_GROUP | 2  |                                                                                               |
| STRING              | 3  |                                                                                               |
| INTEGER             | 4  | Tout entier entre -2^53 et 2^53                                                               |
| BOOLEAN             | 5  |                                                                                               |
| USER                | 6  |                                                                                               |
| CHANNEL             | 7  | Inclut tous les types de salons + catégories                                                  |
| ROLE                | 8  |                                                                                               |
| MENTIONABLE         | 9  | Inclut les utilisateurs et les rôles                                                          |
| NUMBER              | 10 | N'importe quel double entre -2^53 et 2^53                                                     |
| ATTACHMENT          | 11 | Objet [pièce jointe](https://discord.com/developers/docs/resources/channel#attachment-object) |

**Vous pouvez trouver plus d'informations dans la [documentation officielle de l'API de Discord](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type).**

</details>

## Exemple(s)

**Consultez le guide commande slash/interaction pour plus d'informations sur les commandes slash !**

Cela va créer une commande slash sans options :

```js
bot.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[$guildID/global;exemple;Description de la commande slahs !;true;slash]`
});
// Créera une commande slash sans aucune entrée utilisateur, vous pouvez choisir entre global/$guildID pour créer une commande globalement ou uniquement pour un serveur spécifique.
```
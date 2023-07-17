---
title: '$newChannel'
description: '$newChannel contient les données du salon mis à jour, utilisées dans les évènements channel update, delete et create, ou sinon toutes les données seront vides.'
id: newChannel
---

`$newChannel` contient les données du salon mis à jour, utilisées dans les évènements channel update, delete et create, ou sinon toutes les données seront vides.

## Utilisation

```php
$newChannel[option]
```

## Paramètres

| Champ  | Type                 | Description         | Obligatoire |
| ------ | -------------------- | ------------------- |:-----------:|
| option | chaîne de caractères | Option à récupérer. |    vrai     |


### Options

| Champ                      | Type                 | Description                                                                           |
| -------------------------- | -------------------- | ------------------------------------------------------------------------------------- |
| nom                        | chaîne de caractères | Renvoie le nom du salon.                                                              |
| id                         | entier               | Renvoie l'id du salon.                                                                |
| createdAt                  | entier               | Renvoie la date de création du salon.                                                 |
| createdTimestamp           | entier               | Renvoie le timestamp de quand le salon a été créé.                                    |
| defaultAutoArchiveDuration | entier               | Renvoie la durée de l'archive par défaut.                                             |
| deleteable                 | chaine de caractères | Renvoie true / false si le salon peut être supprimé.                                  |
| deleted                    | chaine de caractères | Renvoie true / false si le salon a été supprimé.                                      |
| guildID                    | entier               | Renvoie l'ID de la guilde actuelle.                                                   |
| lastMessageContent         | chaîne de caractères | Renvoie le contenu du dernier message envoyé dans le salon.                           |
| lastMessageID              | entier               | Renvoie l'ID du dernier message envoyé dans le salon.                                 |
| lastPinAt                  | entier               | Renvoie la date du dernier message épinglé.                                           |
| lastPinTimestamp           | entier               | Retourne le timestamp du dernier message épinglé.                                     |
| manageable                 | chaine de caractères | Retourne true / false si le salon est gérable.                                        |
| nsfw                       | chaine de caractères | Renvoie true / false si le salon est NSFW.                                            |
| parentName                 | chaine de caractères | Renvoie le nom de la catégorie.                                                       |
| parentID                   | entier               | Renvoie l'ID de la catégorie.                                                         |
| position                   | entier               | Renvoie la position du salon.                                                         |
| slowmode                   | entier               | Renvoie la durée du mode ralenti du salon. (s'il y en a)                              |
| topic                      | chaine de caractères | Renvoie le sujet du salon.                                                            |
| type                       | chaine de caractères | Renvoie le type de salon.                                                             |
| viewable                   | chaine de caractères | Renvoie true / false si le salon est visible.                                         |
| permsAllowed               | chaine de caractères | Renvoie les permissions autorisées pour le salon actuel.                              |
| permsDenied                | chaine de caractères | Renvoie les permissions refusées pour le salon actuel.                                |
| perms                      | chaine de caractères | Renvoie les permissions pour le salon actuel.                                         |
| joinable                   | chaine de caractères | Renvoie true / false si le canal est rejoignable (seulement si c'est un salon vocal). |
| userLimit                  | entier               | Renvoie la limite d'utilisateur pour le salon (vocal) actuel.                         |
| messageCount               | entier               | Renvoie le nombre de messages envoyés dans le salon actuel.                           |

## Exemple(s)
```js
bot.channelCreateCommand({
    channel: "channelid",
    code: `
    Un nouveau salon a été créé!
- Nom: $newChannel[name]
- ID: $newChannel[id]
- <#$newChannel[id]>`
})
```
- Ce code s'exécutera quand __un salon est créé__.
---
```js
bot.channelDeleteCommand({
    channel: "channelid",
    code: `
    Un salon a été supprimé!
- Nom: $oldChannel[name]
- ID: $oldChannel[id]`
})
```
- Ce code s'exécutera quand __un salon est supprimé__.
---
```js
bot.channelUpdateCommand({
    channel: "channelid",
    code: `
    Un salon a été mis à jour!
- Nouveau nom: $newChannel[name]
 - Ancien nom: $oldChannel[name]`
})
```
- Ce code s'exécutera quand __un salon est mis à jour__.
---
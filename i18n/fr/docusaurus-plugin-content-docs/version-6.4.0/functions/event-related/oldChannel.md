---
title: '$oldChannel'
description: '$oldChannel conserve les données du salonn avant qu''il ne soit mis à jour, utilisé dans un événement de mise à jour du salon, sinon toute donnée sera vide.'
id: oldChannel
---

`$oldChannel` conserve les données du salonn avant qu'il ne soit mis à jour, utilisé dans un événement de mise à jour du salon, sinon toute donnée sera vide.

## Utilisation

```php
$oldChannel[option]
```

## Paramètres

| Champ  | Type                 | Description         | Obligatoire |
| ------ | -------------------- | ------------------- |:-----------:|
| option | chaîne de caractères | Option à récupérer. |    vrai     |

### Options

| Champ                      | Type                 | Description                                                                           |
| -------------------------- | -------------------- | ------------------------------------------------------------------------------------- |
| name                       | chaîne de caractères | Renvoie le nom du salon.                                                              |
| id                         | entier               | Renvoie l'id du salon.                                                                |
| createdAt                  | entier               | Renvoie la date de création du salon.                                                 |
| createdTimestamp           | entier               | Renvoie le timestamp de quand le salon a été créé.                                    |
| defaultAutoArchiveDuration | entier               | Renvoie la durée de l'archive par défaut.                                             |
| deleteable                 | chaine de caractères | Renvoie true / false si le salon est supprimable.                                     |
| deleted                    | chaine de caractères | Renvoie true / false si le salon a été supprimé.                                      |
| guildID                    | entier               | Renvoie l'ID du serveur actuelle.                                                     |
| lastMessageContent         | chaîne de caractères | Renvoie le contenu du dernier message envoyé dans le salon.                           |
| lastMessageID              | entier               | Renvoie l'ID du dernier message envoyé dans le salon.                                 |
| lastPinAt                  | entier               | Renvoie la date du dernier message épinglé.                                           |
| lastPinTimestamp           | entier               | Retourne le timestamp du dernier message épinglé.                                     |
| manageable                 | chaine de caractères | Retourne true / false si le salon est modifiable.                                     |
| nsfw                       | chaine de caractères | Renvoie true / false si le salon est NSFW.                                            |
| parentName                 | chaine de caractères | Renvoie le nom de la catégorie.                                                       |
| parentID                   | entier               | Renvoie l'ID de la catégorie.                                                         |
| position                   | entier               | Renvoie la position du salon.                                                         |
| slowmode                   | entier               | Renvoie la durée du mode lent du salon. (s'il y en a)                                 |
| topic                      | chaine de caractères | Renvoie le sujet du salon.                                                            |
| type                       | chaine de caractères | Renvoie le type de salon.                                                             |
| viewable                   | chaine de caractères | Renvoie true / false si le salon est visible.                                         |
| permsAllowed               | chaine de caractères | Renvoie les permissions autorisées pour le salon actuel.                              |
| permsDenied                | chaine de caractères | Renvoie les permissions refusées pour le salon actuel.                                |
| perms                      | chaine de caractères | Retourne les permissions pour le salon actuel.                                        |
| joinable                   | chaine de caractères | Renvoie true / false si le salon est rejoignable (seulement si c'est un salon vocal). |
| userLimit                  | entier               | Renvoie la limite d'utilisateur pour le salon (vocal) actuel.                         |
| messageCount               | entier               | Renvoie le nombre de messages envoyés dans le salon actuel.                           |

## Exemple(s)
```js
bot.channelCreateCommand({
    channel: "channelid",
    code: `
    Un nouveau salon a été créé !
- Nom : $newChannel[name]
- ID : $newChannel[id]
- <#$newChannel[id]>`
})
```
- Ce code s'exécutera quand __un salon est créé__.
---
```js
bot.channelDeleteCommand({
    channel: "channelid",
    code: `
    Un salon a été supprimé !
- Nom : $oldChannel[name]
- ID : $oldChannel[id]`
})
```
- Ce code s'exécutera quand __un salon est supprimé__.
---
```js
bot.channelUpdateCommand({
    channel: "channelid",
    code: `
    Un salon a été mis à jour !
- Nouveau nom : $newChannel[name]
 - Ancien nom : $oldChannel[name]`
})
```
- Ce code s'exécutera quand __un salon est mis à jour__.
---
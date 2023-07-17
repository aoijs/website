---
title: '$newApplicationCmd'
description: '$newApplicationCmd récupère les données des Callbacks de l''application (met à jour et en crée un).'
id: newApplicationCmd
---

`$newApplicationCmd` récupère les données des Callbacks de l'application (met à jour et en crée un).

## Utilisation

```php
$newApplicationCmd[option]
```

## Paramètres

| Champ  | Type                 | Description         | Obligatoire |
| ------ | -------------------- | ------------------- |:-----------:|
| option | chaîne de caractères | Option à récupérer. |    vrai     |

### Options

| Champ             | Type                 | Description                                                        |
| ----------------- | -------------------- | ------------------------------------------------------------------ |
| nom               | chaîne de caractères | Nom de la commnade slash.                                          |
| id                | entier               | ID de la commande slash.                                           |
| description       | chaîne de caractères | Description de la commande slash.                                  |
| version           | entier               | Version de la commande slash.                                      |
| options           | chaîne de caractères | Options de la commande slash.                                      |
| guildID           | entier               | ID du serveur de la commande slash.                                |
| applicationID     | entier               | Renvoie l'ID de l'application.                                     |
| defaultPermission | chaine de caractères | Renvoie les permissions par défaut de la commande slash.           |
| timestamp         | chaîne de caractères | Retourne le timestamp de la création de la commande slash (en ms). |
| createdAt         | chaîne de caractères | Retourne la date de création de la commande slash.                 |

## Exemple(s)

```js
bot.applicationCmdUpdateCommand({
    channel: "channelid",
    code: `
    Commande slash mis à jour!
- Nom: $newApplicationCmd[name]
- ID: $newApplicationCmd[id]
- ID de l'application: $newApplicationCmd[applicationID]`
})
```
- Ce code s'exécutera lorsque la commande __slash sera mise à jour__ (Modifié)
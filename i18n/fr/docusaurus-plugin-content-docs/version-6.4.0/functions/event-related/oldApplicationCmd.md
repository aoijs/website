---
title: '$oldApplicationCmd'
description: '$oldApplicationCmd récupère les données des callbacks de l''application (évènements mis à jour et supprimé)'
id: oldApplicationCmd
---

`$oldApplicationCmd` récupère les données des callbacks de l'application (évènements mis à jour et supprimé)

## Utilisation

```php
$oldApplicationCmd[option]
```

## Paramètres

| Champ  | Type                 | Description         | Obligatoire |
| ------ | -------------------- | ------------------- |:-----------:|
| option | chaîne de caractères | Option à récupérer. |    vrai     |

### Options

| Champ             | Type                 | Description                                                        |
| ----------------- | -------------------- | ------------------------------------------------------------------ |
| name              | chaîne de caractères | Nom de la commnade slash.                                          |
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
    Commande slash mise à jour !
- Nouveau nom : $newApplicationCmd[name]
 - Ancien nom : $oldApplicationCmd[name]
- Nouvelle description : $newApplicationCmd[description]
 - Ancienne description : $oldApplicationCmd[description]`
})
```
- Ce code sera exécuté lorsque la __commande slash sera mise à jour__ (Modifiée)
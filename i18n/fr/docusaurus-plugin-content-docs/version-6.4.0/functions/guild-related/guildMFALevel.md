---
title: '$guildMFALevel'
description: '$guildMFALevel renverra le niveau de l''A2F (authentification à 2 facteurs) sur le serveur donné'
id: guildMFALevel
---

`$guildMFALevel` renverra le niveau de l'A2F (authentification à 2 facteurs) sur le serveur donné.

## Utilisation

```php
$guildMFALevel[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

| Type de niveau d'A2F |                                                                |
| -------------------- | -------------------------------------------------------------- |
| 0                    | Le serveur n'exige pas l'A2F pour les actions des modérateurs. |
| 1                    | Le serveur exige l'A2F pour les actions des modérateurs.       |

## Exemple(s)

Cela renverra le niveau de l'A2F du serveur dans lequel la commande est exécuté:

```javascript
bot.command({
    name: 'serveurNiveauA2F',
    code: `
  $guildMFALevel[$guildID]
  `
});
```

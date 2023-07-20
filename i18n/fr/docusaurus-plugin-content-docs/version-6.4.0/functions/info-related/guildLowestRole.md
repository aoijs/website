---
title: '$guildLowestRole'
description: '$guildLowestRole renvoie le rôle le plus bas d''un serveur spécifique.'
id: guildLowestRole
---

`$guildLowestRole` renvoie le rôle le plus bas d'un serveur spécifique.

## Utilisation

```php
$guildLowestRole[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    Faux     |

## Exemple(s)

Cela renverra l'ID du plus bas rôle du serveur :

```javascript
bot.command({
    name: 'guildLowestRole',
    code: `
  $guildLowestRole[$guildID]
  `
});
```

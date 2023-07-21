---
title: '$guildVanityURL'
description: '$guildVanityURL renverra l''URL de vanité d''un serveur.'
id: guildVanityURL
---

`$guildVanityURL` renverra l'URL de vanité d'un serveur.

## Utilisation

```php
$guildVanityURL[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    Faux     |

## Exemple(s)

Cela retournera l'URL de vanité de votre serveur, si vous en avez une :

```javascript
bot.command({
    name: 'guildVanityURL',
    code: `
  $guildVanityURL[$guildID]
  `
});
```

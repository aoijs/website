---
title: '$guildBanner'
description: '$guildBanner renverra la bannière du serveur donné.'
id: guildBanner
---

`$guildBanner` renverra la bannière du serveur donné.

## Utilisation

```php
$guildBanner[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description    | Obligatoire |
| ---------- | ------ | -------------- |:-----------:|
| IDserveur? | entier | ID du serveur. |    faux     |

## Exemple(s)

Cela renverra la bannière du serveur dans lequel la commande est exécutée (si elle est débloquée et utilisée):

```javascript
bot.command({
    name: 'bannièreServeur',
    code: `
  $guildBanner[$guildID]
  `
});
```

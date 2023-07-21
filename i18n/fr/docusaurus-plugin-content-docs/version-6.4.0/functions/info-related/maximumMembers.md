---
title: '$maximumMembers'
description: '$maximumMembers renverra le nombre maximum de membres qu''un serveur peut avoir.'
id: maximumMembers
---

`$maximumMembers` renverra le nombre maximum de membres qu'un serveur peut avoir.

## Utilisation

```php
$maximumMembers[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | l'ID du serveur. |    Faux     |

## Exemple(s)

Cela retournera le maximum de membres que vous pouvez avoir dans votre serveur :

```javascript
bot.command({
    name : 'maximumMembers',
    code: `
  Vous pouvez avoir : $maximumMembers[$guildID] membres dans ce serveur!
  `
});
```

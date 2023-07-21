---
title: '$addTimestamp'
description: '$addTimestamp ajoutera un timestamp à un embed.'
id: addTimestamp
---

`$addTimestamp` ajoutera un timestamp à un embed.

## Utilisation

```php
$addTimestamp[Ms?]
```

## Paramètres

| Champ | Type   | Description | Obligatoire |
| ----- | ------ | ----------- |:-----------:|
| Ms?   | entier | Heure Unix. |    Faux     |

## Exemple(s)

Cela va créer un embed avec un timestamp et une description :

```javascript
bot.command({
    name: 'addTimestamp',
    code: `
  $description[Bonjour !]
  $addTimestamp
  `
});
```

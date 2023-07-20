---
title: '$rolePosition'
description: '$rolePosition renverra la position d''un rôle spécifique.'
id: rolePosition
---

`$rolePosition` renverra la position d'un rôle spécifique.

## Utilisation

```php
$rolePosition[IDrôle;IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDrôle     | entier | L'ID du rôle.    |    vrai     |
| IDserveur? | entier | L'ID du serveur. |    Faux     |

## Exemple(s)

Cela retournera la position du rôle de n'importe quel rôle, par exemple, nous utiliserons le rôle `@everyone`:

```javascript
bot.command({
    name: 'rolePosition',
    code: `
  $rolePosition[$guildID]
  `
});
```

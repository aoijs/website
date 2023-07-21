---
title: '$setRolePosition'
description: '$setRolePosition définira la position d''un rôle.'
id: setRolePosition
---

`$setRolePosition` définira la position d'un rôle.

## Utilisation

```php
$setRolePosition[IDrôle;position;IDserveur?]
```

## Paramètres

| Champ      | Type   | Description                                         | Obligatoire |
| ---------- | ------ | --------------------------------------------------- |:-----------:|
| IDrôle     | entier | L'ID du rôle à modifier.                            |    vrai     |
| position   | nombre | La nouvelle position du rôle. (1 étant le plus bas) |    vrai     |
| IDserveur? | entier | L'ID du serveur où se trouve le rôle.               |    faux     |

## Exemple(s)

Ceci changera la position d'un rôle aléatoire en `1` (le rôle le plus élevé du bot doit être au-dessus de ce rôle):

```javascript
bot.command({
    name: '',
    code: `définirRôlePosition
   $setRolePosition[$randomRoleID;1;$guildID]`
});
```
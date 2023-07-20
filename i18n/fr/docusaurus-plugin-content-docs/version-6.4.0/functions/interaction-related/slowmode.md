---
title: '$slowmode'
description: '$slowmode changera le mode lent d''un salon.'
id: slowmode
---

`$slowmode` changera le mode lent d'un salon.

## Utilisation

```php
$slowmode[temps;IDsalon?]
```

## Paramètres

| Champ    | Type           | Description                          | Obligatoire |
| -------- | -------------- | ------------------------------------ |:-----------:|
| temps    | chaîne, nombre | Le nouveau mode lent du salon donné. |    vrai     |
| IDsalon? | entier         | L'ID du salon qui sera modifié.      |    Faux     |

Ceci a un temps maximum de 21600000 secondes (6 heures).

## Exemple(s)

Cela changera le mode lent du salon à trois minutes :

```javascript
bot.command({
    name: 'slowmode',
    code: `
   $slowmode[3m;$channelID]`
});
```

Cela changera le mode lent du salon à 6 heures :

```javascript
bot.command({
    name: 'slowmode',
    code: `
   $slowmode[6h;$channelID]`
});
```
---
title: '$deleteStageInstance'
description: '$deleteStageInstance mettra fin à une conférence existante.'
id: deleteStageInstance
---

`$deleteStageInstance` mettra fin à une conférence existante.

## Utilisation

```php
$deleteStageInstance[IDsalon]
```

## Paramètres

| Champ   | Type   | Description                            | Obligatoire |
| ------- | ------ | -------------------------------------- |:-----------:|
| IDsalon | entier | L'ID du salon où a lieu la conférence. |    vrai     |

## Exemple(s)

Ceci mettra fin à la conférence en cours : ( assurez-vous de remplacer le "IDconférence" par un ID de salon de conférence réel )

```javascript
bot.command({
    name: 'deleteStageInstance',
    code: `
  $deleteStageInstance[IDconférence]
  `
});
```
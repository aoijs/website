---
title: '$expandNumber'
description: '$expandNumber développera un nombre donné.'
id: expandNumber
---

`$expandNumber` développera un nombre donné.

## Utilisation

```php
$expandNumber[nombreAbrévié]
```

## Paramètres

| Champ         | Type                 | Description                           | Obligatoire |
| ------------- | -------------------- | ------------------------------------- |:-----------:|
| nombreAbrevié | chaîne de caractères | Nombre que vous souhaitez développer. |    vrai     |

## Exemple(s)

Cela renverra `1300000`:

```javascript
bot.command({
    name: 'developperNombre',
    code: `
  $expandNumber[1.3m]`
});
```

---
title: '$discriminator'
description: '$discriminator will return a user''s discriminator.'
id: discriminator
---

`$discriminator` will return a user's discriminator.

## Modo de uso

```php
$discriminator[userId?]
```

## Parámetros

| Campo   | Tipo    | Parámetros                                                       | Requerido |
| ------- | ------- | ---------------------------------------------------------------- | --------- |
| userId? | integer | The ID of the user you want the discriminator to be returned of. | no        |

## Ejemplo(s)

This will return your Discord User Discriminator, for example `User#0000` (the four digits):

```javascript
bot.command({
    name: 'discriminator',
    code: `
  $discriminator[$authorID] // your discriminator
  $discriminator[$clientID] // the bot's discriminator
  `
});
```
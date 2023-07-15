---
title: '$boostingSince'
description: '$boostingSince will return the starting date of someone boosting a specific guild.'
id: boostingSince
---

`$boostingSince` will return the starting date of someone boosting a specific guild.

## Modo de uso

```php
$boostingSince[guildID?;userID?;format?]
```

## Parámetros

| Campo       | Tipo   | Descripción                                                                      | Requerido |
| ----------- | ------ | -------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero | The ID of the guild of where you want to check how long someone's been boosting. |    no     |
| usarioID?   | entero | The user ID you want to check the boosting start date of.                        |    no     |
| format?     | cadena | The format that the date will be returned in, listed below.                      |   falso   |

| Format |                                                         |
| ------ | ------------------------------------------------------- |
| ms     | 1652643158052                                           |
| date   | Sun May 15 2022 20:32:38 GMT+0100 (British Summer Time) |

## Ejemplo(s)

This will return the date when you started boosting (wont work when you're not boosting):

```javascript
bot.command({
    name: 'boostingSince',
    code: `
  $boostingSince[$guildID;$authorID;date]
  `
});
```
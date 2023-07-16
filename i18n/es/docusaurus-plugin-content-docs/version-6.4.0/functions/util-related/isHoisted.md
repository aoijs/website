---
title: '$isHoisted'
description: '$isHoisted will check if a specific role is hoisted.'
id: isHoisted
---

`$isHoisted` will check if a specific role is hoisted.

## Uso

```php
$isHoisted[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                 | Requerido |
| ----------- | ------ | -------------------------------------------------------------------------- |:---------:|
| roleID      | entero | ID of the role you want to check if it's hoisted or not.                   | verdadero |
| servidorID? | entero | The ID of the guild where you want to check if the role is hoisted or not. |    no     |

## Ejemplo(s)

This will check if a role called `Owner` is hoisted in your server:

```javascript
bot.command({
    name: 'isHoisted',
    code: `
  $isHoisted[$findRole[Owner];$guildID]
  `
});
```

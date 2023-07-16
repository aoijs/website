---
title: '$isMentionable'
description: '$isMentionable check if a given role is mentionable.'
id: isMentionable
---

`$isMentionable` check if a given role is mentionable.

## Uso

```php
$isMentionable[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                       | Requerido |
| ----------- | ------ | ------------------------------------------------ |:---------:|
| roleID      | entero | The role ID to check if it's mentionable or not. | verdadero |
| servidorID? | entero | ID of the guild where the role is present in.    |    no     |

## Ejemplo(s)

This will check if a role with the name `Owner` is mentionable and returns either `true` or `false`:

```javascript
bot.command({
    name: 'isMentionable',
    code: `
  $isMentionable[$findRole[Owner];$guildID]
  `
});
```

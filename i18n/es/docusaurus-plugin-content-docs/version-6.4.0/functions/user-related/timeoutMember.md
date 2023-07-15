---
title: '$timeoutMember'
description: '$timeoutMember will timeout a given member using Discord''s Timeout feature.'
id: timeoutMember
---

`$timeoutMember` will timeout a given member using Discord's Timeout feature.

## Modo de uso

```php
$timeoutMember[guildID;memberID;timer;timeoutEndsAt?;reason?]
```

## Parámetros

| Campo          | Tipo           | Parámetros                                                                                        | Requerido |
| -------------- | -------------- | ------------------------------------------------------------------------------------------------- |:---------:|
| servidorID     | entero         | The guild ID of where the member is located in.                                                   | verdadero |
| memberID       | entero         | The ID of the user that will be timeouted.                                                        | verdadero |
| timer          | cadena, número | The duration of the timeout.                                                                      |    sí     |
| timeoutEndsAt? | boolean        | Returns time when timeout ends.  <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |
| ¿razón?        | cadena         | razón que se mostrará en los registros de auditoría del gremio.                                   |    no     |

## Ejemplo(s)

This will timeout a given member for five minutes:

```javascript
bot.command({
    name: 'timeoutMember',
    code: `
   $timeoutMember[$guildID;userID;5m;false]`
});
```
---
title: '$usersInChannel'
description: '$usersInChannel will return all users who are connected to the specified voice channel.'
id: usersInChannel
---

`$usersInChannel` will return all users who are connected to the specified voice channel.

## Uso

```php
$usersInChannel[channelID;option?;sep?]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                                             | Requerido |
| ------- | -------- | ------------------------------------------------------------------------------------------------------ |:---------:|
| canalID | entero   | Voice Channel ID.                                                                                      | verdadero |
| opción? | consulta | How to return the users <br /> 1. **id** (default) <br /> 2. **user** - mentions the users |    no     |
| sep?    | string   | Separator to separate multiple returned values.                                                        |   falso   |

## Ejemplo(s)

This will return the users connected to a voice channel:

```javascript
bot.command({
    name: 'usersInChannel',
    code: `
  $usersInChannel[$voiceID;user;, ]
  `
});
```

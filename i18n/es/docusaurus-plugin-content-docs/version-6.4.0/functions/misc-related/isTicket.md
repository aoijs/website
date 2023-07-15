---
title: '$isTicket'
description: '$isTicket will return either true or false depending on the channel being a ticket channel.'
id: isTicket
---

`$isTicket` will return either true or false depending on the channel being a ticket channel.

## Modo de uso

```php
$isTicket[channelID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros    | Requerido |
| -------- | ------- | ------------- |:---------:|
| canalID? | integer | ID del canal. |    no     |

## Ejemplo(s)

This will check if the current channel is a ticket channel created by `$newTicket`:

```javascript
bot.command({
    name: "isTicket",
    code: `
    $isTicket[$channelID]
    `
});
```
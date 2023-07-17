---
title: '$isTicket'
description: '$isTicket devolverá verdadero o falso según el tipo de interacción.'
id: isTicket
---

`$isTicket` devolverá verdadero o falso según el tipo de interacción.

## Uso

```php
$isTicket[canalID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros    | Requerido |
| -------- | ------- | ------------- |:---------:|
| canalID? | integer | ID del canal. |    no     |

## Ejemplo(s)

Esto comprobará si el canal actual es un canal de tickets creado por `$newTicket`:

```javascript
bot.command({
    name: "isTicket",
    code: `
    $isTicket[$channelID]
    `
});
```
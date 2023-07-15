---
title: '$closeTicket'
description: '$closeTicket will delete a ticket created by `$newTicket`.'
id: closeTicket
---

`$closeTicket` will delete a ticket created by `$newTicket`.

## Modo de uso

```php
$closeTicket[error?]
```

## Parámetros

| Campo  | Tipo   | Parámetros       | Requerido |
| ------ | ------ | ---------------- |:---------:|
| error? | string | Error to return. |    no     |

## Ejemplo(s)

```javascript
bot.command({
    name: "closeTicket",
    code: `
  $closeTicket[Something went wrong!]
  `
});
```
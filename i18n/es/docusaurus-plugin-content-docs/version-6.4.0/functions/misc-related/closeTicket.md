---
title: '$closeTicket'
description: '$closeTicket eliminará un ticket creado por `$newTicket`.'
id: closeTicket
---

`$closeTicket` eliminará un ticket creado por `$newTicket`.

## Uso

```php
$closeTicket[error?]
```

## Parámetros

| Campo  | Tipo   | Parámetros        | Requerido |
| ------ | ------ | ----------------- |:---------:|
| error? | string | Error al retorno. |    no     |

## Ejemplo(s)

```javascript
bot.command({
    name: "closeTicket",
    code: `
  $closeTicket[¡Algo salió mal!]
  `
});
```
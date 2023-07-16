---
title: '$newTicket'
description: '$newTicket will create a new ticket channel.'
id: newTicket
---

`$newTicket` will create a new ticket channel.

## Uso

```php
$newTicket[name;msg;categoryID?;returnId?;error?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                             | Requerido |
| ----------- | -------- | -------------------------------------------------------------------------------------- |:---------:|
| nombre      | consulta | Channel name.                                                                          | verdadero |
| msg         | consulta | Start message.                                                                         | verdadero |
| categoryID? | entero   | Where to place the channel after creation.                                             |   falso   |
| returnId?   | boolean  | Return the channel ID <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |
| error?      | cadena   | Error to return when something went wrong.                                             |    no     |

## Ejemplo(s)

This will create a new ticket:

```javascript
bot.command({
    name: "newTicket",
    code: `
    $newTicket[ticket-$username;Hello <@$authorID!;$guildID;false;Error!]
    `
});
```

This will create a new ticket and send an embed:

```javascript
bot.command({
    name: "newTicket",
    code: `
    $newTicket[ticket-$username;Hello <@$authorID! {newEmbed:{description:<@$authorID> opened a new ticket!}};$guildID;false;Error!]
    `
});
```
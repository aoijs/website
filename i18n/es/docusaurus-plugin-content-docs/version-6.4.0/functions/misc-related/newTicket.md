---
title: '$newTicket'
description: '$newTicket creará un nuevo canal de Ticket.'
id: newTicket
---

`$newTicket` creará un nuevo canal de Ticket.

## Uso

```php
$newTicket[nombre;msg;categoria ID?;ID de retorno?;error?]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                                                                | Requerido |
| -------------- | -------- | ----------------------------------------------------------------------------------------- |:---------:|
| nombre         | consulta | Nombre del canal..                                                                        | verdadero |
| msg            | consulta | Mensaje de inicio                                                                         | verdadero |
| categoríaID?   | entero   | Dónde colocar el canal después de la creación.                                            |   falso   |
| ID de retorno? | boolean  | Devuelve el ID del canal <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |
| error?         | cadena   | Error al devolver cuando algo salió mal.                                                  |   falso   |

## Ejemplo(s)

Esto creará un nuevo ticket:

```javascript
bot.command({
    name: "newTicket",
    code: `
    $newTicket[ticket-$username;Hello <@$authorID!;$guildID;false;Error!]
    `
});
```

Esto creará un nuevo ticket y enviará un incrustado:

```javascript
bot.command({
    name: "newTicket",
    code: `
    $newTicket[ticket-$username;Hello <@$authorID! {newEmbed:{description:<@$authorID> opened a new ticket!}};$guildID;false;Error!]
    `
});
```
---
title: $closeTicket
description: '$closeTicket wird ein Ticket löschen, das von `$newTicket ` erstellt wurde.'
id: closeTicket
---

`$closeTicket` wird ein Ticket löschen, das von `$newTicket` erstellt wurde.

## Verwendung

```php
$closeTicket[error?]
```

## Verwendung

| Feld    | Typ    | Beschreibung             | Erforderlich |
| ------- | ------ | ------------------------ |:------------:|
| fehler? | string | Fehler bei der Rückgabe. |    falsch    |

## Beispiel(e)

```javascript
bot.command({
    Name: "closeTicket",
    Code: `
  $closeTicket[Something went wrong!]
  `
});
```
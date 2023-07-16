---
title: '$isTicket'
description: '$isTicket wird entweder true oder false zurückgeben, abhängig davon, dass der Kanal ein Ticket-Kanal ist.'
id: isTicket
---

`$isTicket` wird entweder true oder false zurückgeben, abhängig davon, dass der Kanal ein Ticket-Kanal ist.

## Verwendung

```php
$isTicket[channelID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung | Erforderlich |
| ---------- | ---------- | ------------ |:------------:|
| channelID? | ganze Zahl | Kanal-ID.    |    falsch    |

## Beispiel(e)

Dies wird überprüft, ob der aktuelle Kanal ein Ticket-Kanal ist, der von `$newTicket` erstellt wurde:

```javascript
bot.command({
    name: "isTicket",
    code: `
    $isTicket[$channelID]
    `
});
```
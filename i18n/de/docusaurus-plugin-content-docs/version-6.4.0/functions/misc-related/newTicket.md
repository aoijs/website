---
title: '$newTicket'
description: '$newTicket wird einen neuen Ticket-Kanal erstellen.'
id: newTicket
---

`$newTicket` wird einen neuen Ticket-Kanal erstellen.

## Verwendung

```php
$newTicket[name;msg;categoryID?;returnId?;error?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                                                           | Erforderlich |
| ------------ | ---------- | -------------------------------------------------------------------------------------- |:------------:|
| Name         | string     | Kanalname.                                                                             |     wahr     |
| msg          | string     | Start-Nachricht.                                                                       |     wahr     |
| kategoryID?  | ganze Zahl | Wo der Kanal nach der Erstellung platziert werden soll.                                |    falsch    |
| zurückgeben? | boolean    | Gibt die Kanal-ID <br /> 1 zurück. **true** <br /> 2. **false** (Standard) |    falsch    |
| fehler?      | string     | Fehler bei der Rückgabe, wenn etwas schief gegangen ist.                               |    falsch    |

## Beispiel(e)

Erstelle ein neues Ticket:

```javascript
bot.command({
    Name: "newTicket",
    Code: `
    $newTicket[ticket-$username;Hello <@$authorID!;$guildID;false;Error!]
    `
});
```

Dies wird ein neues Ticket erstellen und eine Einfügung senden:

```javascript
bot.command({
    name: "newTicket",
    code: `
    $newTicket[Ticket-$username;Hallo <@$authorID! {newEmbed:{description:<@$authorID> hat ein neues Ticket geöffnet!}};$guildID;falsch;Fehler!]
    `
});
```
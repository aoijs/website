---
title: $editMessage
description: '$editMessage wird eine bestimmte Nachricht bearbeiten.'
id: editMessage
---

`$editMessage` wird eine Nachricht bearbeiten.

## Verwendung

```php
$editMessage[messageID;content;channelID?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                      | Erforderlich |
| ------------- | ---------- | ------------------------------------------------- |:------------:|
| nachrichtenID | ganze Zahl | Die Nachricht, die bearbeitet werden soll.        |     wahr     |
| inhalt        | string     | Der Inhalt der neuen Nachricht.                   |     wahr     |
| channelID?    | ganze Zahl | Die Kanal-ID, in der sich die Nachricht befindet. |    falsch    |

Du kannst nur Nachrichten bearbeiten, die vom Bot selbst gesendet wurden.

## Beispiel(e)

Dies wird die gesendete Nachricht nach fünf Sekunden bearbeiten: (funktioniert genauso wie `$editIn`)

```javascript
bot.command({
    Name: 'editMessage',
    Code: `
  $editMessage[$get[id];Bye!]
  $wait[5s]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```
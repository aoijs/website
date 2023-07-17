---
title: $sendMessage
description: '$sendMessage wird eine Nachricht im Ausführungskanal senden.'
id: sendMessage
---

`$sendMessage` wird eine Nachricht im Ausführungskanal senden.

## Verwendung

```php
$sendMessage[content;returnID?]
```

## Verwendung

| Feld       | Typ     | Beschreibung                                                                             | Erforderlich |
| ---------- | ------- | ---------------------------------------------------------------------------------------- |:------------:|
| inhalt     | string  | Zu sendende Nachrichteninhalte.                                                          |     wahr     |
| return ID? | boolean | Rücksende-Nachrichten-ID?  <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies wird eine Nachricht im aktuellen Kanal senden:

```javascript
bot.command({
    name: 'sendMessage',
    code: `
   $sendMessage[Hello!;false]  
  `
});
```

Dies wird eine Einbettung in den aktuellen Kanal mit Parsern senden:

```javascript
bot.command({
    name: 'sendMessage',
    code: `
   $sendMessage[Hallo! {newEmbed:{title:Bonjour!}};falsch]  
  `
});
```
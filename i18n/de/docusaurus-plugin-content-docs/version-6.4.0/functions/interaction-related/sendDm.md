---
title: '$sendDm'
description: '$sendDm wird Direkte Nachricht an einen bestimmten Benutzer.'
id: sendDm
---

`$sendDm` wird einen bestimmten Benutzer direkt benachrichtigen.

## Verwendung

```php
$sendDm[message;userID?;returnID?]
```

## Verwendung

| Feld       | Typ     | Beschreibung                                                                             | Erforderlich |
| ---------- | ------- | ---------------------------------------------------------------------------------------- |:------------:|
| nachricht  | string  | Der Inhalt der Direktnachricht.                                                          |     wahr     |
| userID?    | string  | Der Benutzer, der das DM erhalten wird.                                                  |    falsch    |
| return ID? | boolean | Rücksende-Nachrichten-ID?  <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies sendet ein DM an den Befehlsautor:

```javascript
bot.command({
    name: 'sendDm',
    code: `
   $sendDm[Hello!;$authorID;false]  
  `
});
```
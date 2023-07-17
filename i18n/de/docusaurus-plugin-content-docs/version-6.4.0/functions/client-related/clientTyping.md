---
title: $clientTyping
description: '$clientTyping wird deinen Bot-Typ in einem Kanal erzeugen (zeige an, dass er schreibt).'
id: clientTyping
---

`$clientTyping` macht deinen Bot in einem Kanal (zeigt an, dass er schreibt).

## Verwendung

```php
$clientTyping
```

## Beispiel(e)

Dies wird deinen Bot als "Hallo!" als Nachricht anzeigen:

```javascript
bot.command({
    name: 'clientTyping',
    code: `
  Hallo!
  $clientTyping
  `
});
```

---
title: '$noEscapingMessage'
description: '$noEscapingMessage wird die nicht maskierte Nachricht zurückgeben.'
id: noEscapingMessage
---

`$noEscapingMessage` wird die nicht maskierte Nachricht zurückgeben.

## Verwendung

```php
$noEscapingMessage[args]
```

## Verwendung

| Feld  | Typ    | Beschreibung         | Erforderlich |
| ----- | ------ | -------------------- |:------------:|
| args? | string | Nachrichtenposition. |    falsch    |

## Beispiel(e)

```javascript
bot.command({
    name: "noEscapingMessage",
    code: `
    $noEscapingMessage[1]
    `
});
```
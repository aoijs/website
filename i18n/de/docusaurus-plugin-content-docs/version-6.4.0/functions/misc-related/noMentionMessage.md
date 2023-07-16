---
title: $noMentionMessage
description: '$noMentionMessage wird den Teil der Nachricht zurückgeben, der keine Erwähnung enthält.'
id: noMentionMessage
---

`$noMentionMessage` gibt den Teil der Nachricht zurück, der keine Erwähnung enthält.

## Verwendung

```php
$noMentionMessage[args]
```

## Verwendung

| Feld  | Typ    | Beschreibung         | Erforderlich |
| ----- | ------ | -------------------- |:------------:|
| args? | string | Nachrichtenposition. |    falsch    |

## Beispiel(e)

```javascript
bot.command({
    name: "noMentionMessage",
    code: `
    $noMentionMessage[1]
    `
});
```
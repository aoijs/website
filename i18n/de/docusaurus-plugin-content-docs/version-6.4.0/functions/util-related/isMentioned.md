---
title: $isMentioned
description: '$isMentioned prüft, ob die Abfrage eine Erwähnung enthält.'
id: isMentioned
---

`$isMentioned` prüft, ob die Abfrage eine Erwähnung enthält.

## Verwendung

```php
$isMentioned[query]
```

## Verwendung

| Feld    | Typ    | Beschreibung                                                         | Erforderlich |
| ------- | ------ | -------------------------------------------------------------------- |:------------:|
| abfrage | string | Wo möchten Sie überprüfen, ob ein User/Rollen/Channel erwähnt wurde. |     wahr     |

## Beispiel(e)

Dies wird `true` zurückgeben, wie Sie in der Nachricht erwähnt wurden:

```javascript
bot.command({
    name: 'isMentioned',
    code: `
  $isMentioned[<@$authorID>]
  `
});
```

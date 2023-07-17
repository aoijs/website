---
title: $executionTime
description: '$executionTime wird die Ausführungszeit zurückgeben.'
id: executionTime
---

`$executionTime` gibt die Ausführungszeit zurück.

## Verwendung

```php
$executionTime
```

## Beispiel(e)

Dies gibt die Ausführungszeit zurück, wie lange es dauerte, bis dieser Code ausgeführt wurde:

```javascript
bot.command({
    name: "executionTime",
    code: `
    This took: $executionTime MS
  `
});
```
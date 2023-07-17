---
title: $second
description: '$second gibt die aktuelle Sekunde in CST zurück.'
id: second
---

`$second` gibt die aktuelle Sekunde in CST zurück.

## Verwendung

```php
$second
```

## Beispiele

Dies gibt die aktuelle Sekunde zurück:

```javascript
bot.command({
    name: "second",
    code: `
    $second
    `
});
```

Sie können die Zeitzone mit `$timezone` ändern:

```javascript
bot.command({
    name: "second",
    code: `
    $second 
    $timezone[America/New_York]
    ` // gibt die aktuelle Sekunde in New York
});
```
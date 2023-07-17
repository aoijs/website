---
title: '$minute'
description: '$minute gibt die aktuelle Minute in CST.'
id: minute
---

`$minute` gibt die aktuelle Minute in CST zurück.

## Verwendung

```php
$minute
```

## Beispiel(e)

Dies gibt die aktuelle Minute zurück:

```javascript
bot.command({
    name: "minute",
    code: `
    $minute
    `
});
```

Sie können die Zeitzone mit `$timezone` ändern:

```javascript
bot.command({
    name: "minute",
    code: `
    $minute 
    $timezone[America/New_York]
    ` // gibt die aktuelle Minute in New York
});
```
---
title: $hour
description: '$hour gibt die aktuelle Stunde in CST.'
id: hour
---

`$hour` gibt die aktuelle Stunde in CST zurück.

## Verwendung

```php
$hour
```

## Beispiel(e)

Dies gibt die aktuelle Stunde zurück:

```javascript
bot.command({
    name: "hour",
    code: `
    $hour
    `
});
```

Sie können die Zeitzone mit `$timezone` ändern:

```javascript
bot.command({
    name: "hour",
    code: `
    $hour 
    $timezone[America/New_York]
    ` // gibt die aktuelle Stunde in New York
});
```
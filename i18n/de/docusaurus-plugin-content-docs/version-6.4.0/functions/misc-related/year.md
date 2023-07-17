---
title: $year
description: '$year wird das laufende Jahr in CST.'
id: year
---

`$year` wird das laufende Jahr in CST zurückgeben.

## Verwendung

```php
$year
```

## Beispiel(e)

Dies gibt das laufende Jahr zurück:

```javascript
bot.command({
    name: "year",
    code: `
    $year
    `
});
```

Sie können die Zeitzone mit `$timezone` ändern:

```javascript
bot.command({
    name: "year",
    code: `
    $year 
    $timezone[America/New_York]
    ` // gibt das laufende Jahr in New York
});
```
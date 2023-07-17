---
title: '$ram'
description: '$ram gibt die RAM-Nutzung Ihres Bots zurück.'
id: ram
---

`$ram` gibt die RAM-Auslastung Ihres Bots zurück.

## Verwendung

```php
$ram
```

## Beispiel(e)

Dies gibt die RAM-Auslastung und die verfügbare Menge an RAM zurück:

```javascript
bot.command({
    name: 'ram',
    code: `
  Ich benutze derzeit \`$ram%\` aus \`$maxRam%\`!
  `
});
```

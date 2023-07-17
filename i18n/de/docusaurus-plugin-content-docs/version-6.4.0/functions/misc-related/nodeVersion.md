---
title: '$nodeVersion'
description: '$nodeVersion gibt Ihre aktuelle node.js-Version zurück.'
id: nodeVersion
---

`$nodeVersion` gibt Ihre aktuelle node.js-Version zurück.

## Verwendung

```php
$nodeVersion
```

## Beispiel(e)

Dies gibt die aktuelle node.js Version zurück, auf der Ihr Bot läuft unter:

```javascript
bot.command({
    name: "nodeVersion",
    code: `
    $nodeVersion
    `
});
```
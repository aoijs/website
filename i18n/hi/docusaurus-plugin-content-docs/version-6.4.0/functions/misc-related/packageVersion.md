---
title: '$packageVersion'
description: '$packageVersion will return your current aoi.js version.'
id: packageVersion
---

`$packageVersion` will return your current aoi.js version.

## प्रोयोग

```php
$packageVersion
```

## उदाहरण

This will return your current aoi.js version:

```javascript
bot.command({
    name: "packageVersion",
    code: `
    $packageVersion
    `
});
```
---
title: '$databasePing'
description: '$databasePing will return your database ping.'
id: databasePing
---

`$databasePing` will return your database ping.

## प्रोयोग

```php
$databasePing
```

## उदाहरण

This will return your database ping:

```javascript
bot.command({
    name: 'databasePing',
    code: `
  My database ping is: $databasePing MS!
  `
});
```
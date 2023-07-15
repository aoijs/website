---
title: '$lerefAvatar'
description: '$lerefAvatar will return the Avatar of the creator of aoi.js'
id: lerefAvatar
---

`$lerefAvatar` will return the Avatar of the creator of aoi.js

## प्रोयोग

```php
$lerefAvatar
```

## उदाहरण

This will return the creator's Avatar:

```javascript
bot.command({
    name: "lerefAvatar",
    code: `
    $lerefAvatar
    `
});
```
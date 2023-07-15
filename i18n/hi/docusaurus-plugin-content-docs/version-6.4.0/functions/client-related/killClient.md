---
title: '$killClient'
description: '$killClient will forcefully shutdown your bot.'
id: killClient
---

`$killClient` will forcefully shutdown your bot.

## प्रोयोग

```php
$killClient
```

## उदाहरण

This will forcefully shutdown your bot:

```javascript
bot.command({
    name: "killClient",
    code: `
    $killClient
    `
});
```
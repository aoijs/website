---
title: '$randomEmoji'
description: '$randomEmoji will return a random emoji ID.'
id: randomEmoji
---

`$randomEmoji` will return a random emoji ID.

## Використання

```php
$randomEmoji
```

## Приклад(и)

This will return a random emoji ID of your guild:

```javascript
bot.command({
    name: 'randomEmoji',
    code: `
  $randomEmoji
  `
});
```

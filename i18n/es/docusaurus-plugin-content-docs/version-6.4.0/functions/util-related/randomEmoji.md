---
title: '$randomEmoji'
description: '$randomEmoji will return a random emoji ID.'
id: randomEmoji
---

`$randomEmoji` will return a random emoji ID.

## Uso

```php
$randomEmoji
```

## Ejemplo(s)

This will return a random emoji ID of your guild:

```javascript
bot.command({
    name: 'randomEmoji',
    code: `
  $randomEmoji
  `
});
```

---
title: '$deleteCommand'
description: '$deleteCommand will delete the initial command message.'
id: deleteCommand
---

`$deleteCommand` will delete the initial command message.

## الاستخدام

```php
$deleteCommand
```

## مثال

This will delete the initial command message:

```javascript
bot.command({
    name: 'deleteCommand',
    code: `
  Hello!
  $deleteCommand
  `
});
```

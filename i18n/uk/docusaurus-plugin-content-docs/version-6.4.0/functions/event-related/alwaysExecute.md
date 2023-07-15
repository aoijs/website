---
title: '$alwaysExecute'
description: '$alwaysExecute will always emit when a message event is triggered'
id: alwaysExecute
---

`$alwaysExecute` will always emit when a message event is triggered.

## Використання

```php
$alwaysExecute
```

## Приклад(и)

This will send the given message each time you send a message:

```javascript
bot.command({
  name: "$alwaysExecute",
  code: `Hello!`
})
```
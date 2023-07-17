---
title: '$alwaysExecute'
description: '$alwaysExecute завжди випромінює, коли викликається подія повідомлення'
id: alwaysExecute
---

`$alwaysExecute` завжди буде викликати, коли викликається подія повідомлення.

## Використання

```php
$alwaysExecute
```

## Приклад(и)

Це буде відправляти дане повідомлення кожного разу, коли ви надішлете повідомлення:

```javascript
bot.command({
  name: "$alwaysExecute",
  код: "Привіт!`
})
```
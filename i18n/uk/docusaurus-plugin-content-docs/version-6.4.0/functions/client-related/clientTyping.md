---
title: '$clientTyping'
description: '$clientTyping will make your bot type in a channel (show that it''s typing).'
id: clientTyping
---

`$clientTyping` will make your bot type in a channel (show that it's typing).

## Використання

```php
$clientTyping
```

## Приклад(и)

This will display your bot as typing and send "Hello!" as message:

```javascript
bot.command({
    name: 'clientTyping',
    code: `
  Hello!
  $clientTyping
  `
});
```

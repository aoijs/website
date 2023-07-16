---
title: '$clientID'
description: '$clientID вернет ID пользователя Discord клиента.'
id: clientID
---

`$clientID` вернет клиентский ID пользователя Discord.

## Использование

```php
$clientID
```

## Пример(ы)

ID клиента будет возвращен:

```javascript
bot.command({
    name: 'clientID',
    code: `
  $clientID
  `
});
```
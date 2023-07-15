---
title: '$clientOwnerIDs'
description: '$clientOwnerIDs will return the user IDs of the bot owner (or of multiple people if you have a team).'
id: clientOwnerIDs
---

`$clientOwnerIDs` will return the user IDs of the bot owner (or of multiple people if you have a team).

## Використання

```php
$clientOwnerIDs[separator?]
```

## Параметри

| Поле        | Тип   | Опис                                        | Обов'язковий |
| ----------- | ----- | ------------------------------------------- |:------------:|
| розділювач? | рядок | Separator to split user IDs. (default: `,`) |      ні      |

## Приклад(и)

This will return your user ID most likely:

```javascript
bot.command({
    name: 'clientOwnerIDs',
    code: `
  $clientOwnerIDs
  `
});
```

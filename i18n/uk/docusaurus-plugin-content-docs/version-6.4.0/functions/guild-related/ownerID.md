---
title: '$ownerID'
description: '$ownerID will return the ID of the server owner, depending on the given argument.'
id: ownerID
---

`$ownerID` +will return the ID of the server owner, depending on the given argument.

## Використання

```php
$ownerID[guildID?]
```

## Параметри

| Поле     | Тип     | Опис          | Обов'язковий |
| -------- | ------- | ------------- |:------------:|
| guildID? | integer | The guild ID. |      ні      |

## Приклад(и)

This will return the ID of the server owner where you execute the command in:

```javascript
bot.command({
    name: 'ownerID',
    code: `
  $ownerID[$guildID]
  `
});
```

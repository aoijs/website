---
title: '$cacheMembers'
description: '$cacheMembers will cache all members of a guild.'
id: cacheMembers
---

`$cacheMembers` will cache all members of a guild.

## Використання

```php
$cacheMembers[guildID?;returnCount?]
```

## Параметри

| Поле         | Тип     | Опис                                                                                          | Обов'язковий |
| ------------ | ------- | --------------------------------------------------------------------------------------------- |:------------:|
| guildID?     | integer | Of which guild the members shall be cached from.                                              |      ні      |
| returnCount? | boolean | Returns the cached member count. <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will cache all members of the current guild and return the amount of the cached members:

```javascript
bot.command({
    name: 'cacheMembers',
    code: `
  $cacheMembers[$guildID;true]
  `
});
```

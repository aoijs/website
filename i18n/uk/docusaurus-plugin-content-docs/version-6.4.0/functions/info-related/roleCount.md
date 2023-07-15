---
title: '$roleCount'
description: '$roleCount will return the guild''s role count.'
id: roleCount
---

`$roleCount` will return the guild's role count.

## Використання

```php
$roleCount[guildID?;fetchFirst?]
```

## Параметри

| Поле        | Тип     | Опис                                                                                                            | Обов'язковий |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID?    | integer | The ID of the guild.                                                                                            |      ні      |
| fetchFirst? | boolean | Fetch the roles first before returning the count?  <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will return the amount of roles of your guild:

```javascript
bot.command({
    name: 'roleCount',
    code: `
  $roleCount[$guildID;true]
  `
});
```
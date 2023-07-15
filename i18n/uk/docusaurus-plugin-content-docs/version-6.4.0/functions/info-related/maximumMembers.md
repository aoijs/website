---
title: '$maximumMembers'
description: '$maximumMembers will return the maximal amount of members a guild can have.'
id: maximumMembers
---

`$maximumMembers` will return the maximal amount of members a guild can have.

## Використання

```php
$maximumMembers[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                 | Обов'язковий |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. |      ні      |

## Приклад(и)

This will return the maximum of members you can have in your guild:

```javascript
bot.command({
    name: 'maximumMembers',
    code: `
  You can have: $maximumMembers[$guildID] Members in this guild!
  `
});
```

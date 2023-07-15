---
title: '$dm'
description: '$dm will send a message to an users Direct Messages.'
id: dm
---

`$dm` will send a message to an users Direct Messages.

## Використання

```php
$dm[userID]
```

## Параметри

| Поле   | Тип     | Опис                                 | Обов'язковий |
| ------ | ------- | ------------------------------------ |:------------:|
| userID | integer | The user which shall receive the DM. |     так      |

**Important**:
- You are unable to DM other bots.
- You are unable to DM people who closed their DMs.

## Приклад(и)

This will send an DM to you containing "Hello! Did you really think this works?":

```javascript
bot.command({
    name: 'dm',
    code: `
  Hello! Did you really think this works?
  $dm[$authorID]
  `
});
```
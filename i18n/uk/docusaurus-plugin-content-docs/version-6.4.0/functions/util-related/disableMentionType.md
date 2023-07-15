---
title: '$disableMentionType'
description: '$disableMentionType will disable a specific mention type.'
id: disableMentionType
---

`$disableMentionType` will disable a specific mention type.

## Використання

```php
$disableMentionType[type]
```

## Параметри

| Поле | Тип   | Опис                                 | Обов'язковий |
| ---- | ----- | ------------------------------------ |:------------:|
| тип  | рядок | Type of mention you want to disable. |     так      |

<details>
  <summary> <h2> Available Types </h2></summary>

| Тип      | Опис                                |
| -------- | ----------------------------------- |
| everyone | `@everyone` and `@here` mentions.   |
| users    | All user mentions.                  |
| roles    | All role mentions.                  |
| all      | Roles, users and any other mention. |

</details>

## Приклад(и)

This will stop the bot from mentioning you:

```javascript
bot.command({
    name: 'mention',
    code: `
<@$authorID>
$disableMentionType[users] 
  `
});
```

This will stop the bot from mentioning anyone or anything:

```javascript
bot.command({
    name: 'mention',
    code: `
<@$authorID>
$disableMentionType[all] 
  `
});
```

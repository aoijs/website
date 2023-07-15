---
title: '$indexOfArg'
description: '$indexOfArg will return the index of the given query.'
id: indexOfArg
---

`$indexOfArg` will return the index of the given query.

## Використання

```php
$indexOfArg[string;query]
```

## Параметри

| Поле  | Тип   | Опис                                            | Обов'язковий |
| ----- | ----- | ----------------------------------------------- |:------------:|
| рядок | рядок | The text the bot will be checking the index of. |     так      |
| запит | рядок | The query the bot will be checking for.         |     так      |

## Приклад(и)

This will return `3` as `great` is the third argument in the query:

```javascript
bot.command({
    name: 'indexOfArgs',
    code: `
  $indexOfArgs[aoi.js is great for users who are new to Discord's API!;great]
  `
});
```

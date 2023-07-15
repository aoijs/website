---
title: '$onlyForCategories'
description: '$onlyForCategories will check if the command was executed in the category of the execution channel and return a error message if not.'
id: onlyForCategories
---

`$onlyForCategories` will check if the command was executed in the category of the execution channel and return a error message if not.

## Використання

```php
$onlyForCategories[...categoryIds;error]
```

## Параметри

| Поле           | Тип             | Опис                                                                               | Обов'язковий |
| -------------- | --------------- | ---------------------------------------------------------------------------------- |:------------:|
| ...categoryIds | string, integer | Categories you want to limit the command to.                                       |     так      |
| error          | рядок           | Error to return when the command was not executed in any of the listed categories. |     так      |

## Приклад(и)

This will limit the command only to given channel categories:

```javascript
bot.command({
    name: "onlyForCategories",
    code: `
    Ok.
    $onlyForCategories[categoryID;categoryID;You can't use that command here!]
    `
});
```
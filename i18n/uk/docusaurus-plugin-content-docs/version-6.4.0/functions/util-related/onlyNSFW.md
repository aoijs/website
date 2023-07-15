---
title: '$onlyNSFW'
description: '$onlyNSFW will check if the command was executed in a NSFW channel and return a error message if not.'
id: onlyNSFW
---

`$onlyNSFW` will check if the command was executed in a NSFW channel and return a error message if not.

## Використання

```php
$onlyNSFW[error?]
```

## Параметри

| Поле  | Тип   | Опис                                                                 | Обов'язковий |
| ----- | ----- | -------------------------------------------------------------------- |:------------:|
| error | рядок | Error to return when the command was not executed in a NSFW channel. |     так      |

## Приклад(и)

This will limit the command only to NSFW channels:

```javascript
bot.command({
    name: "onlyNSFW",
    code: `
    Ok.
    $onlyNSFW[You can't use that command here!]
    `
});
```
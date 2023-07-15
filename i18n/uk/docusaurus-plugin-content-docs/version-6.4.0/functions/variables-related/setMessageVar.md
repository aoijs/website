---
title: '$setMessageVar'
description: '$setMessageVar will change the value of a given message variable.'
id: setMessageVar
---

`$setMessageVar` will change the value of a given message variable.

## Використання

```php
$setMessageVar[varname;value;messageID?;table?]
```

## Параметри

| Поле       | Тип     | Опис                | Обов'язковий |
| ---------- | ------- | ------------------- |:------------:|
| varname    | рядок   | Variable name.      |     так      |
| value      | рядок   | New Variable value. |     так      |
| messageID? | integer | Message ID.         |      ні      |
| table?     | рядок   | Variable table.     |      ні      |

## Приклад(и)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setMessageVar",
    code: `
    $setMessageVar[Example;This is a value;$messageID;main]
    `
});
```
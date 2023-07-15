---
title: '$onlyIfMessageContains'
description: '$onlyIfMessageContains will check if the message contains the given text and if not return a error message.'
id: onlyIfMessageContains
---

`$onlyIfMessageContains` will check if the message contains the given text and if not return a error message.

## Використання

```php
$onlyIfMessageContains[content;...text;error]
```

## Параметри

| Поле    | Тип   | Опис                                         | Обов'язковий |
| ------- | ----- | -------------------------------------------- |:------------:|
| content | рядок | Message which should contain the given text. |     так      |
| text    | рядок | Text to check for in the message.            |     так      |
| error   | рядок | Error to return.                             |     так      |

## Приклад(и)

This will return the error message as "aoi.js" does not appear in "Hello!":

```javascript
bot.command({
    name: "onlyIfMessageContains",
    code: `
    Ok.
    $onlyIfMessageContains[Hello!;aoi.js;Couldn't find that word!]
    `
});
```
---
title: '$noEscapingMessage'
description: '$noEscapingMessage will return the non escaped message.'
id: noEscapingMessage
---

`$noEscapingMessage` will return the non escaped message.

## Використання

```php
$noEscapingMessage[args]
```

## Параметри

| Поле  | Тип   | Опис              | Обов'язковий |
| ----- | ----- | ----------------- |:------------:|
| args? | рядок | Message position. |      ні      |

## Приклад(и)

```javascript
bot.command({
    name: "noEscapingMessage",
    code: `
    $noEscapingMessage[1]
    `
});
```
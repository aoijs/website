---
title: '$noMentionMessage'
description: '$noMentionMessage will return the part of the message which contains no mention.'
id: noMentionMessage
---

`$noMentionMessage` will return the part of the message which contains no mention.

## Використання

```php
$noMentionMessage[args]
```

## Параметри

| Поле  | Тип   | Опис              | Обов'язковий |
| ----- | ----- | ----------------- |:------------:|
| args? | рядок | Message position. |      ні      |

## Приклад(и)

```javascript
bot.command({
    name: "noMentionMessage",
    code: `
    $noMentionMessage[1]
    `
});
```
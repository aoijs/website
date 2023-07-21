---
title: $noMentionMessage
description: '$noMentionMessage вернет ту часть сообщения, которая не содержит упоминаний.'
id: noMentionMessage
---

`$noMentionMessage` вернет ту часть сообщения, которая не содержит упоминаний.

## Использование

```php
$noMentionMessage[args]
```

## Параметры

| Название | Nbg    | Описание           | Нужно |
| -------- | ------ | ------------------ |:-----:|
| арги?    | строка | Позиция сообщения. | ложь  |

## Пример(ы)

```javascript
bot.command({
    name: "noMentionMessage",
    code: `
    $noMentionMessage[1]
    `
});
```
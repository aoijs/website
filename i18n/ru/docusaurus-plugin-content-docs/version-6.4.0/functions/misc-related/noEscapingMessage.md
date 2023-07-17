---
title: '$noEscapingMessage'
description: '$noEscapingMessage вернет неэкранированное сообщение.'
id: noEscapingMessage
---

`$noEscapingMessage` вернет неэкранированное сообщение.

## Использование

```php
$noEscapingMessage[args]
```

## Параметры

| Название | Nbg    | Описание           | Нужно |
| -------- | ------ | ------------------ |:-----:|
| арги?    | строка | Позиция сообщения. | false |

## Пример(ы)

```javascript
bot.command({
    name: "noEscapingMessage",
    code: `
    $noEscapingMessage[1]
    `
});
```
---
title: '$messageAttachment'
description: '$messageAttachment will return a message attachment depending on the given index.'
id: messageAttachment
---

`$messageAttachment` will return a message attachment depending on the given index.

## Використання

```php
$messageAttachment[index?]
```

## Параметри

| Поле   | Тип     | Опис                                                    | Обов'язковий |
| ------ | ------- | ------------------------------------------------------- |:------------:|
| index? | integer | The index of which message attachment will be returned. |      ні      |

## Приклад(и)

This will return your given attachment:

```javascript
bot.command({
    name: 'messageAttachment',
    code: `
  You had the following attachment in your message: $messageAttachment
  `
});
```

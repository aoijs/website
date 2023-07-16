---
title: '$randomEmoji'
description: '$randomEmoji возвращает случайный идентификатор эмодзи.'
id: randomEmoji
---

`$randomEmoji` будет возвращать случайный ID эмодзи.

## Использование

```php
$randomEmoji
```

## Пример(ы)

Это вернет случайный идентификатор эмодзи вашей гильдии:

```javascript
bot.command({
    name: 'randomEmoji',
    code: `
  $randomEmoji
  `
});
```

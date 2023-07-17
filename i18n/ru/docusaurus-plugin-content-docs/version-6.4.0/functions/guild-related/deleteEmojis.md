---
title: '$deleteEmojis'
description: '$deleteEmojis удалит несколько эмодзи.'
id: deleteEmojis
---

`$deleteEmojis` удалит несколько эмодзи.

## Использование

```php
$deleteEmojis[...emojis]
```

## Параметры

| Название | Nbg    | Описание                                                       | Нужно |
| -------- | ------ | -------------------------------------------------------------- |:-----:|
| emojis   | строка | Имя эмодзи, ID или полная форма эмодзи, которые будут удалены. |  да   |

## Пример(ы)

Это удалит два случайных эмодзи вашей гильдии:

```javascript
bot.command({
    name: 'deleteEmojis',
    code: `
  $deleteEmojis[$randomEmoji;$randomEmoji]
  `
});
```

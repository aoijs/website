---
title: '$deleteEmoji'
description: '$deleteEmoji удалит определённые эмодзи.'
id: deleteEmoji
---

`$deleteEmoji` удалит определённые эмодзи.

## Использование

```php
$deleteEmoji[emoji]
```

## Параметры

| Название | Nbg    | Описание                                                       | Нужно |
| -------- | ------ | -------------------------------------------------------------- |:-----:|
| emoji    | строка | Имя эмодзи, ID или полная форма эмодзи, которые будут удалены. |  да   |

## Пример(ы)

Это удалит случайные эмодзи вашей гильдии:

```javascript
bot.command({
    name: 'deleteEmoji',
    code: `
  $deleteEmoji[$randomEmoji]
  `
});
```

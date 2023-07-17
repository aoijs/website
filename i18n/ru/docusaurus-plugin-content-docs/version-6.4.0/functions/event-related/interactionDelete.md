---
title: $interactionDelete
description: '$interactionDelete удалит ответ на взаимодействие.'
id: interactionDelete
---

`$interactionDelete` удалит ответ на взаимодействие.

## Использование

```php
$interactionDelete
```

## Пример(ы)

Это удалит взаимодействие через 5 секунд.

```javascript
bot.interactionCommand({
    name: "interactionDelete",
    prototype: "button",
    code: `
  $interactionDelete
  $wait[5s]
  $interactionReply[Hello, World!;;;;everyone;false]
  `
});
```

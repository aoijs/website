---
title: $mentionedChannelsCount
description: '$mentionedChannelsCount возвращает количество упоминаний о канале в сообщении.'
id: mentionedChannelsCount
---

`$mentionedChannelsCount` возвращает количество упоминаний о канале в сообщении.

## Использование

```php
$mentionedChannelsCount
```

## Пример(ы)

Это возвращает количество упоминаний о канале в указанном тексте:

```javascript
bot.command({
    name: 'mentionedChannelsCount',
    code: `
  $mentionedChannelsCount
  <#837531672341381190> <#869210515065426012> <#805852932938661900>
  `
});
```

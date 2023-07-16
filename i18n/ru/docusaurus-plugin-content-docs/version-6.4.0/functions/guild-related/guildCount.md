---
title: $guildCount
description: '$guildCount возвращает количество гильдий в которых находится ваш бот.'
id: guildCount
---

`$guildCount` возвращает количество гильдий, в которых находится ваш бот.

## Использование

```php
$guildCount
```

## Пример(ы)

Это вернет количество гильдий, в которые находится ваш бот:

```javascript
bot.command({
    name: 'guildCount',
    code: `
  Я в $guildCount гильдиях!
  «
});
```

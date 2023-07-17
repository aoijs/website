---
title: $argsCount
description: '$argsCount возвращает количество заданных аргументов.'
id: argsCount
---

`$argsCount` возвращает количество заданных аргументов.

## Использование

```php
$argsCount
```

## Пример(ы)

Это вернет количество аргументов в вашем сообщении, например, `[prefix]argsCount Hello Bye` вернет два:

```javascript
bot.command({
    name: 'argsCount',
    code: `
  $argsCount
  `
});
```

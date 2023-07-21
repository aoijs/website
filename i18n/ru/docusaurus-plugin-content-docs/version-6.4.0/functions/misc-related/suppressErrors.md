---
title: $suppressErrors
description: '$suppressErrors будет отключать ошибки функции aoi.js.'
id: suppressErrors
---

`$suppressErrors` устраняет ошибки функции aoi.js.

## Использование

```php
$suppressErrors[errorMsg?]
```

## Параметры

| Название | Nbg    | Описание             | Нужно |
| -------- | ------ | -------------------- |:-----:|
| errorMsg | строка | Сообщение об ошибке. | ложь  |

## Пример(ы)

Это устранит все ошибки вашего кода и вернет предварительное сообщение об ошибке:

```javascript
bot.command({
    name: "suppressErrors",
    code: `
    $description
    $suppressErrors[Something went wrong!]
    ` // Преднамеренное неправильное использование $description
});
```
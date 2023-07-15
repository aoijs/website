---
title: '$exec'
description: '$exec will execute given code in your console.'
id: exec
---

`$exec` will execute given code in your console.

## Використання

```php
$exec[code]
```

## Параметри

| Поле | Тип   | Опис                             | Обов'язковий |
| ---- | ----- | -------------------------------- |:------------:|
| code | рядок | Code to execute in your console. |     так      |

## Приклад(и)

This will return your current node version:

```javascript
bot.command({
    name: "exec",
    code: `
    \`\`\`
    $exec[node -v]
    \`\`\`
  `
});
```
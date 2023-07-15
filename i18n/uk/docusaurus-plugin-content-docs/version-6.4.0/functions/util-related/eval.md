---
title: '$eval'
description: '$eval will execute given aoi.js code.'
id: eval
---

`$eval` will execute given aoi.js code.

## Використання

```php
$eval[code;returnCode?;sendMessage?;returnExecution?;returnID?]
```

## Параметри

| Поле             | Тип     | Опис                                                                                                          | Обов'язковий |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------- |:------------:|
| code             | рядок   | Aoi.js code to execute.                                                                                       |     так      |
| returnCode?      | boolean | Return code. <br /> 1. **true** <br /> 2. **false** (default)                                     |      ні      |
| sendMessage?     | boolean | Send output. <br /> 1. **true** <br /> 2. **false** (default)                                     |      ні      |
| returnExecution? | boolean | Return more information about the executed code. <br /> 1. **true** <br /> 2. **false** (default) |      ні      |
| returnID?        | boolean | Return message ID, <br /> 1. **true** <br /> 2. **false** (default)                               |      ні      |

## Приклад(и)

This will return your user ID:

```javascript
bot.command({
    name: "eval",
    code: `
    \`\`\`
    $eval[$authorID;true;true;true;true]
    \`\`\`
  `
});
```
---
title: '$handleError'
description: '$handleError will return information about an occurred error.'
id: handleError
---

`$handleError` will return information about an occurred error.

## Використання

```php
$handleError[option]
```

## Параметри

| Поле   | Тип   | Опис                                                                                                                                                                | Обов'язковий |
| ------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| option | рядок | What to return the data of. <br /> 1. **function** - function name <br /> 2. **command** - command name <br /> 3. **error** - error that occurred |     так      |

## Приклад(и)

**You require `events: ["onFunctionError"]` in your main file in order to use this function!**

```javascript
bot.functionErrorCommand({
    channel: "channelID (optional)",
    code: `Something went wrong in your "$handleError[command]" command! The function "$handleError[function]" returned the error "$handleError[error]"!`
});
```

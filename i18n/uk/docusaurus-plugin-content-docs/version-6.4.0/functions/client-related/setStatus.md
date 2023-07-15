---
title: '$setStatus'
description: '$setStatus will change the client''s status.'
id: setStatus
---

`$setStatus` will change the client's status.

## Використання

```php
$setStatus[name;type;status;URL;afk?]
```

## Параметри

| Поле   | Тип             | Опис                                                                                                                                            | Обов'язковий |
| ------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| назва  | рядок           | The content of the status.                                                                                                                      |     так      |
| тип    | string, integer | 1. **PLAYING** (default) <br /> 2. **WATCHING** <br /> 3. **STREAMING** <br /> 4. **LISTENING** <br /> 5. **COMPETING** |     так      |
| status | рядок           | 1. **online** (default) <br /> 2. **idle** <br /> 3. **dnd** <br /> 4. **invisible**                                          |     так      |
| URL    | рядок           | URL (streaming status)                                                                                                                          |     так      |
| afk?   | boolean         | 1. **true** <br /> 2. **false** (default)                                                                                                 |      ні      |

## Приклад(и)

This will change the client's status to **PLAYING** and **online**:

```javascript
bot.command({
    name: 'setStatus',
    code: `
   $setStatus[Hello!;PLAYING;online]`
});
```
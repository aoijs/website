---
title: '$clientLeave'
description: '$clientLeave will make your bot leave a specific server.'
id: clientLeave
---

`$clientLeave` will make your bot leave a specific server.

## Використання

```php
$clientLeave[guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                            | Обов'язковий |
| -------- | ------- | ----------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild which your bot shall leave. |      ні      |

## Приклад(и)

This will make your bot leave the current guild:

```javascript
bot.command({
    name: 'clientLeave',
    code: `
  $clientLeave[$guildID]
  $wait[2s]
  $sendMessage[Bye, I'm leaving!]
  `
});
```

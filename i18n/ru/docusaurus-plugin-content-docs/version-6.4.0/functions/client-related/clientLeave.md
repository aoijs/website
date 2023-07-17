---
title: $clientLeave
description: '$clientLeave заставит вашего бота покинуть определенный сервер.'
id: clientLeave
---

`$clientLeave` заставит вашего бота покинуть определенный сервер.

## Использование

```php
$clientLeave[guildID?]
```

## Параметры

| Название    | Nbg   | Описание                                 | Нужно |
| ----------- | ----- | ---------------------------------------- |:-----:|
| ID гильдии? | целое | ID гильдии, которую ваш бот должен уйти. | ложь  |

## Пример(ы)

Это заставит вашего бота покинуть текущую гильдию:

```javascript
bot.command({
    имя: 'clientLeave',
    код: `
  $clientLeave[$guildID]
  $wait[2s]
  $sendMessage[Bye, I'm leaving!]
  «
});
```

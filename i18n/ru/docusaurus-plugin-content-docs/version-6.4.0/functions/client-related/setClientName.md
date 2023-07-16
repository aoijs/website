---
title: '$setClientName'
description: '$setClientName изменит имя пользователя Discord.'
id: setClientName
---

`$setClientName` изменит имя пользователя Discord.

## Использование

```php
$setClientName[username]
```

## Параметры

| Название         | Nbg    | Описание                        | Нужно |
| ---------------- | ------ | ------------------------------- |:-----:|
| имя пользователя | строка | Новое имя пользователя клиента. |  да   |

## Пример(ы)

Это изменит имя пользователя клиента на имя автора команды:

```javascript
bot.command({
    name: 'setClientName',
    code: `
   $setClientName[$username[$authorID]]`
});
```
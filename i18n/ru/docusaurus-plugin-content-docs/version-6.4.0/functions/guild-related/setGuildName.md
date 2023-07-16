---
title: '$setGuildName'
description: '$setGuildName изменит название гильдии.'
id: setGuildName
---

`$setGuildName` изменит название гильдии.

## Использование

```php
$setGuildName[name;guildID?]
```

## Параметры

| Название    | Nbg    | Описание                                | Нужно |
| ----------- | ------ | --------------------------------------- |:-----:|
| название    | строка | Название новой гильдии.                 |  да   |
| ID гильдии? | целое  | ID гильдии, имя которой будет изменено. | ложь  |

## Пример(ы)

Это изменит имя гильдии, в котором вы выполняете команду, на имя пользователя:

```javascript
bot.command({
    name: 'setGuildName',
    code: `
   $setGuildName[$username[$authorID];$guildID]`
});
```
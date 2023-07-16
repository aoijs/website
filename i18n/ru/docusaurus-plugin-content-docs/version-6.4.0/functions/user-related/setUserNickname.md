---
title: '$setUserNickname'
description: '$setUserNickname изменит имя члена гильдии.'
id: setUserNickname
---

`$setUserNickname` изменит имя пользователя гильдии.

## Использование

```php
$setUserNickname[userID;newName;reason?]
```

## Параметры

| Название        | Nbg           | Описание                                                      | Нужно |
| --------------- | ------------- | ------------------------------------------------------------- |:-----:|
| ID пользователя | целое         | Идентификатор пользователя, чьи имя будет изменено.           |  да   |
| newName         | строка, число | Их новый никнейм.                                             |  да   |
| причина?        | строка, число | Причина, которая будет отображаться в журнале аудита гильдии. | false |

## Пример(ы)

Это изменит ваше имя на "Я люблю aoi.js": (не работает, если вы владелец гильдии)

```javascript
bot.command({
    name: 'setUserNickname',
    code: `
  $setUserNickname[$authorID;I love aoi.js;They simply love aoi.js]
  `
});
```

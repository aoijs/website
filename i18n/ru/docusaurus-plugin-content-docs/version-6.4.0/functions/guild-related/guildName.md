---
title: '$guildName'
description: '$guildName вернет имя гильдии.'
id: guildName
---

`$guildName` вернет имя гильдии.

## Использование

```php
$guildName[guildID?]
```

## Параметры

| Название    | Nbg   | Описание    | Нужно |
| ----------- | ----- | ----------- |:-----:|
| ID гильдии? | целое | ID гильдии. | ложь  |

## Пример(ы)

Это вернет имя вашей гильдии:

```javascript
bot.command({
    name: 'guildName',
    code: `
  $guildName[$guildID]
  `
});
```

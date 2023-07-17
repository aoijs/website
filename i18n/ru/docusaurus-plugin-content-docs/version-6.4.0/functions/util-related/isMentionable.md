---
title: $isMentionable
description: '$isMentionable проверьте, упоминается ли данная роль.'
id: isMentionable
---

`$isMentionable` проверьте, является ли данная роль упоминаемой.

## Использование

```php
$isMentionable[roleID;guildID?]
```

## Параметры

| Название    | Nbg   | Описание                                            | Нужно |
| ----------- | ----- | --------------------------------------------------- |:-----:|
| roleID      | целое | Идентификатор роли для проверки упоминания или нет. |  да   |
| ID гильдии? | целое | ID гильдии, в которой присутствует роль.            | false |

## Пример(ы)

Это проверит упоминается ли роль с именем `Владелец` и возвращает либо `true` или `false`:

```javascript
bot.command({
    name: 'isMentionable',
    code: `
  $isMentionable[$findRole[Owner];$guildID]
  `
});
```

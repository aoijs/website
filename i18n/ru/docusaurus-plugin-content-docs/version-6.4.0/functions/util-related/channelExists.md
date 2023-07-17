---
title: $channelExists
description: '$channelExists проверит наличие данного канала.'
id: channelExists
---

`$channelExists` проверит наличие данного канала.

## Использование

```php
$channelExists[channel]
```

## Параметры

| Название | Nbg                 | Описание                  | Нужно |
| -------- | ------------------- | ------------------------- |:-----:|
| канал    | строка, целое число | ID канала или имя канала. |  да   |

## Пример(ы)

Это проверит существует ли канал с именем `general` , вместо этого вы можете использовать ID канала:

```javascript
bot.command({
    name: 'channelExists',
    code: `
  $channelExists[general]
  `
});
```

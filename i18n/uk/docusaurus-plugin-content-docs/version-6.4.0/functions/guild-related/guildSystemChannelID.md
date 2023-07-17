---
title: $guildSystemChannelID
description: '$guildSystemChannelID поверне ідентифікатор каналу гільдії.'
id: guildSystemChannelID
---

`$guildSystemChannelID` поверне ID гільдії каналу.

## Використання

```php
$guildSystemChannelID[guildID?]
```

## Параметри

| Поле     | Тип  | Опис        | Обов'язковий |
| -------- | ---- | ----------- |:------------:|
| гільдія? | ціле | ID гільдії. |      ні      |

## Приклад(и)

Це поверне ID гільдії системного каналу.

```javascript
bot.command({
    name: 'guildSystemChannelID',
    код: `
  $guildSystemChannelID[$guildID]
  `
});
```

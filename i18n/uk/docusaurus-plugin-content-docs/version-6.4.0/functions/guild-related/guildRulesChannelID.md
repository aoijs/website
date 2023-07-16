---
title: $guildRulesChannelID
description: '$guildRulesChannelID поверне набір правил каналу гільдії.'
id: guildRulesChannelID
---

`$guildRulesChannelID` поверне ідентифікатор групи правил, що налаштовується.

## Використання

```php
$guildRulesChannelID[guildID?]
```

## Параметри

| Поле     | Тип  | Опис        | Обов'язковий |
| -------- | ---- | ----------- |:------------:|
| гільдія? | ціле | ID гільдії. |      ні      |

## Приклад(и)

Це поверне ідентифікатор каналу правил гільдії (лише гільдії спільноти):

```javascript
bot.command({
    name: 'guildRulesChannelID',
    код: `
  $guildRulesChannelID[$guildID]
  `
});
```

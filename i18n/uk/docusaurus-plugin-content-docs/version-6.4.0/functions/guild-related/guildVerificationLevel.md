---
title: $guildVerificationLevel
description: '$guildVerificationLevel поверне рівень перевірки гільдії.'
id: guildVerificationLevel
---

`$guildVerificationLevel` поверне рівень перевірки гільдії.

## Використання

```php
$guildVerificationLevel[guildID?]
```

## Параметри

| Поле     | Тип  | Опис        | Обов'язковий |
| -------- | ---- | ----------- |:------------:|
| гільдія? | ціле | ID гільдії. |      ні      |

| Тип |            |
| --- | ---------- |
| 0   | Без ефекту |
| 1   | Низька     |
| 2   | Медіум     |
| 3   | Високий    |
| 4   | Найвищий   |

## Приклад(и)

Це поверне рівень перевірки гільдії:

```javascript
bot.command({
    name: 'guildificationLevel',
    код: `
  $guildVerificationLevel[$guildID]
  `
});
```

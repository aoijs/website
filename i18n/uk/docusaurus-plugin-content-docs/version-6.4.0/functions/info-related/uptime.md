---
title: '$uptime'
description: '$uptime will return the bot''s uptime.'
id: uptime
---

`$uptime` will return the bot's uptime.

## Використання

```php
$uptime[option?]
```

## Параметри

| Поле    | Тип   | Опис                                            | Обов'язковий |
| ------- | ----- | ----------------------------------------------- |:------------:|
| option? | рядок | How the uptime will be returned (listed below). |      ні      |

| Option             | Output                 |
| ------------------ | ---------------------- |
| full **(default)** | 19 minutes, 21 seconds |
| humanize           | 19m 21s                |
| ms                 | 1165980                |

## Приклад(и)

This will return the time of how long your bot is online for:

```javascript
bot.command({
    name: 'uptime',
    code: `
  I've been up for $uptime[full]!
  `
});
```

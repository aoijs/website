---
title: '$broadcastEval'
description: '$broadcastEval will execute a code in all guilds of all shards.'
id: broadcastEval
---

`$broadcastEval` will execute a code in all guilds of all shards. (requires sharding)

## Використання

```php
$broadcastEval[function]
```

## Параметри

| Поле     | Тип   | Опис                                    | Обов'язковий |
| -------- | ----- | --------------------------------------- |:------------:|
| function | рядок | Function or code that will be executed. |     так      |

## Приклад(и)

**Requires Sharding - Review the Sharding Guide if you need explanation**

This will return the amount of servers your bot is in:

```javascript
bot.command({
    name: 'broadcastEval',
    code: `
  $broadcastEval[$guildCount]
  `
});
```

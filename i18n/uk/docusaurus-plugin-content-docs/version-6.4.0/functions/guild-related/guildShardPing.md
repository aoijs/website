---
title: $guildShardPing
description: '$guildShardPing поверне латентність конкретної різкої.'
id: guildShardPing
---

`$guildShardPing` поверне латентність конкретної різкої.

## Використання

```php
$guildShardPing[shardId?]
```

## Параметри

| Поле                | Тип  | Опис         | Обов'язковий |
| ------------------- | ---- | ------------ |:------------:|
| корд-ідентифікатор? | ціле | Фрагмент ID. |      ні      |

**Зауважте, що це не працюватиме без фрагментів. Якщо ви не впевнені, перегляньте [гідність посібника](../../../../../../versioned_docs/version-6.4.0/guides/client/6sharding.md).**

## Приклад(и)

Це поверне фрагментарну затримку поточного фрагмента:

```javascript
bot.command({
    name: 'guildShardPing',
    код: `
  $guildShardPing[$shardId]MS
  `
});
```

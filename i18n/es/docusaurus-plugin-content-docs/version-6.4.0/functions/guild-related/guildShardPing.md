---
title: '$guildShardPing'
description: '$guildShardPing devolverá los gremios de un fragmento específico.'
id: guildShardPing
---

`$guildShardPing` devolverá los gremios de un fragmento específico.

## Uso

```php
$guildShardPing[identificación del fragmento?]
```

## Parámetros

| Campo                         | Tipo    | Parámetros       | Requerido |
| ----------------------------- | ------- | ---------------- |:---------:|
| identificación del fragmento? | integer | El fragmento ID. |    no     |

**Tenga en cuenta que esto no funcionará sin fragmentar. Si no estás seguro, revisa la [guía de fragmentación](../../../../../../versioned_docs/version-6.4.0/guides/client/6sharding.md).**

## Ejemplo(s)

Esto devolverá la latencia del fragmento actual:

```javascript
bot.command({
    name: 'guildShardPing',
    code: `
  $guildShardPing[$shardId]MS
  `
});
```

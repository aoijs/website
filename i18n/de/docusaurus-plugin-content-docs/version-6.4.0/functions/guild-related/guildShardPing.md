---
title: '$guildShardPing'
description: '$guildShardPing wird die Latenz eines bestimmten Shards zurückgeben.'
id: guildShardPing
---

`$guildShardPing` wird die Latenz eines bestimmten Shards zurückgeben.

## Verwendung

```php
$guildShardPing[shardId?]
```

## Verwendung

| Feld     | Typ        | Beschreibung  | Erforderlich |
| -------- | ---------- | ------------- |:------------:|
| spardId? | ganze Zahl | Die Shard-ID. |    falsch    |

**Beachten Sie, dass dies nicht ohne sharding funktioniert. Wenn Sie sich nicht sicher sind, lesen Sie die [Freigabeanleitung](../../../../../../versioned_docs/version-6.4.0/guides/client/6sharding.md).**

## Beispiel(e)

Dies gibt die Splitterlatenz der aktuellen Scherbe zurück:

```javascript
bot.command({
    name: 'guildShardPing',
    code: `
  $guildShardPing[$shardId]MS
  `
});
```

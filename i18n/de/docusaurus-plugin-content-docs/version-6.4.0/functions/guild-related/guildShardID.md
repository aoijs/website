---
title: '$guildShardID'
description: '$guildShardID wird die aktuelle Shard-ID zurückgeben.'
id: guildShardID
---

`$guildShardID` gibt die aktuelle Shard-ID zurück.

## Verwendung

```php
$guildShardID
```

**Beachten Sie, dass dies nicht ohne sharding funktioniert. Wenn Sie sich nicht sicher sind, lesen Sie die [Freigabeanleitung](../../../../../../versioned_docs/version-6.4.0/guides/client/6sharding.md).**

## Beispiel(e)

Dies gibt die aktuelle Shard-ID zurück:

```javascript
bot.command({
    name: 'guildShardID',
    code: `
  Ich bin derzeit auf shard $guildShardID!
  `
});
```

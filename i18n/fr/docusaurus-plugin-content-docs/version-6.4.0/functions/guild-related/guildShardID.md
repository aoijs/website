---
title: '$guildShardID'
description: '$guildShardID renverra l''ID actuel du shard.'
id: guildShardID
---

`$guildShardID` renverra l'ID actuel du shard.

## Utilisation

```php
$guildShardID
```

**Notez que cela ne fonctionnera pas sans sharding. Si vous n'êtes pas sûr, consultez le [guide sharding](../../../../../../versioned_docs/version-6.4.0/guides/client/6sharding.md).**

## Exemple(s)

Ceci retournera l'ID actuel du shard:

```javascript
bot.command({
    name: 'ShardSevreurID',
    code: `
  Je suis actuellement sur le shard $guildShardID!
  `
});
```

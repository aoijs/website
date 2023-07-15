---
title: '$guildShardID'
description: '$guildShardID will return the current shard ID.'
id: guildShardID
---

`$guildShardID` will return the current shard ID.

## Використання

```php
$guildShardID
```

**Note that this won't work without sharding. If you're unsure, review the [sharding guide](../../guides/client/6sharding.md).**

## Приклад(и)

This will return the current shard ID:

```javascript
bot.command({
    name: 'guildShardID',
    code: `
  I'm currently on shard $guildShardID!
  `
});
```

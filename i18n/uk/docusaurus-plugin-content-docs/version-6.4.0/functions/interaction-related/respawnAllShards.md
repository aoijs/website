---
title: '$respawnAllShards'
description: '$respawnAllShards will respawn all shards.'
id: respawnAllShards
---

`$respawnAllShards` will respawn all shards. (requires sharding)

## Використання

```php
$respawnAllShards
```

## Приклад(и)

This will respawn all shards (requires sharding):

```javascript
bot.command({
    name: 'respawnAllShards',
    code: `
   $respawnAllShards
  `
});
```
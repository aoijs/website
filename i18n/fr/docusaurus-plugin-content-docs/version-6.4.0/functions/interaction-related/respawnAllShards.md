---
title: '$respawnAllShards'
description: '$respawnAllShards fera réapparaître tous les shards.'
id: respawnAllShards
---

`$respawnAllShards` fera réapparaître tous les shards. (nécessite le sharding)

## Utilisation

```php
$respawnAllShards
```

## Exemple(s)

Tous les shards réapparaîtront (nécessite le sharding) :

```javascript
bot.command({
    name: 'respawnAllShards',
    code: `
   $respawnAllShards
  `
});
```
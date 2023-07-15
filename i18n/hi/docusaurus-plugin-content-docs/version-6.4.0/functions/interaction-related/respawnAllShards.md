---
title: '$respawnAllShards'
description: '$respawnAllShards will respawn all shards.'
id: respawnAllShards
---

`$respawnAllShards` will respawn all shards. (चाहिए शार्डिंग)

## प्रोयोग

```php
$respawnAllShards
```

## उदाहरण

This will respawn all shards (requires sharding):

```javascript
bot.command({
    name: 'respawnAllShards',
    code: `
   $respawnAllShards
  `
});
```
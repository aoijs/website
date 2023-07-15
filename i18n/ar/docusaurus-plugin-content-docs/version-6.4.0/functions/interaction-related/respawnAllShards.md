---
title: '$respawnAllShards'
description: '$respawnAllShards will respawn all shards.'
id: respawnAllShards
---

`$respawnAllShards` will respawn all shards. (يتطلب استعمال نظام الشاردينج)

## الاستخدام

```php
$respawnAllShards
```

## مثال

This will respawn all shards (requires sharding):

```javascript
bot.command({
    name: 'respawnAllShards',
    code: `
   $respawnAllShards
  `
});
```
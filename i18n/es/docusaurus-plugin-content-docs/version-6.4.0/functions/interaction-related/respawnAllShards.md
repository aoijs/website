---
title: '$respawnAllShards'
description: '$respawnAllShards reaparecerá todos los fragmentos.'
id: respawnAllShards
---

`$respawnAllShards` reaparecerá todos los fragmentos. (requiere fragmentar)

## Uso

```php
$respawnAllShards
```

## Ejemplo(s)

Esto reaparecerá todos los fragmentos (requiere fragmentar):

```javascript
bot.command({
    name: 'respawnAllShards',
    code: `
   $respawnAllShards
  `
});
```
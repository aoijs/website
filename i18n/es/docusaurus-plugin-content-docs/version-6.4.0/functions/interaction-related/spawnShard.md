---
title: '$spawnShard'
description: '$spawnShard generará un fragmento.'
id: spawnShard
---

`$spawnShard` generará un fragmento, requiere fragmentar.

## Uso

```php
$spawnShard[fragmento]
```

## Parámetros

| Campo | Tipo   | Parámetros              | Requerido |
| ----- | ------ | ----------------------- |:---------:|
| shard | número | Cantidad de fragmentos. | verdadera |

## Ejemplo(s)

Esto generará fragmento `1`:

```javascript
bot.command({
    name: 'spawnShard',
    code: `
   $spawnShard[1]`
});
```
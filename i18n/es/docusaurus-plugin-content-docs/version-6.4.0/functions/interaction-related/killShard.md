---
title: '$killShard'
description: '$killShard matará un fragmento dado.'
id: killShard
---

`$killShard` matará un fragmento dado. (requiere fragmentar)

## Uso

```php
$killShard[ID de fragmento]
```

## Parámetros

| Campo        | Tipo   | Parámetros       | Requerido |
| ------------ | ------ | ---------------- |:---------:|
| fragmento ID | número | El fragmento ID. | verdadera |

## Ejemplo(s)

Esto matará el fragmento actual ( requiere **fragmentación**):

```javascript
bot.command({
    name: 'killShard',
    code: `
  $killShard[$shardID]
  `
});
```

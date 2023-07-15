---
title: '$broadcastEval'
description: '$broadcastEval ejecutará un código en todos los servidores de todos los shards.'
id: broadcastEval
---

`$broadcastEval` ejecutará un código en todos los servidores de todos los shards. (requiere sharding)

## Modo de uso

```php
$broadcastEval[función]
```

## Parámetros

| Campo   | Tipo   | Descripción                        | Requerido |
| ------- | ------ | ---------------------------------- |:---------:|
| función | string | Función o código que se ejecutará. |    sí     |

## Ejemplo(s)

**Requiere Sharding - Revise la Guía de Sharding si necesita explicación**

Esto devolverá la cantidad de servidores en los que se encuentra tu bot:

```javascript
bot.command({
    name: 'broadcastEval',
    code: `
  $broadcastEval[$guildCount]
  `
});
```

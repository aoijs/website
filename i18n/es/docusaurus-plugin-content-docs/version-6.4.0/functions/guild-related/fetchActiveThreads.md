---
title: $fetchActiveThreads
description: '$fetchActiveThreads devolverá todos los hilos activos de un canal determinado.'
id: fetchActiveThreads
---

$fetchActiveThreads devolverá todos los hilos activos de un canal determinado.

## Uso

```php
$fetchActiveThreads[canalID;opción?]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                                        | Requerido |
| ------- | -------- | ------------------------------------------------------------------------------------------------- |:---------:|
| canalID | entero   | ID del canal del que desea obtener los hilos activos.                                             | verdadero |
| opción? | consulta | Cómo devolver los hilos activos. <br /> 1. **nombre** (por defecto) <br /> 2. **ids** |   falso   |

## Ejemplo(s)

Esto devolverá todos los hilos activos, si los hay:

```javascript
bot.command({
    name: 'fetchActiveThreads',
    code: `
  $fetchActiveThreads[$channelID;name]
  `
});
```
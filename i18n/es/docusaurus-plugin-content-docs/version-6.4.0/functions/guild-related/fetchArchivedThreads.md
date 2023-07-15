---
title: '$fetchArchivedThreads'
description: '$fetchArchivedThreads devolverá todos los hilos activos de un canal determinado.'
id: fetchArchivedThreads
---

`$fetchArchivedThreads` devolverá todos los hilos archivados de un canal determinado.

## Uso

```php
$fetchArchivedThreads[canalID;opción?]
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
    name: 'fetchArchivedThreads',
    code: `
  $fetchArchivedThreads[$channelID;name]
  `
});
```

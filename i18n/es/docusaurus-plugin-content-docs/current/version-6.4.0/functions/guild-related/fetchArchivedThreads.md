---
title: '$fetchArchivedThreads'
description: '$fetchArchivedThreads will return all archived threads of a given channel.'
id: fetchArchivedThreads
---

`$fetchArchivedThreads` will return all archived threads of a given channel.

## Modo de uso

```php
$fetchArchivedThreads[channelID;option?]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                                    | Requerido |
| ------- | -------- | --------------------------------------------------------------------------------------------- |:---------:|
| canalID | entero   | Channel ID of the channel of which you want to fetch the achived threads of.                  | verdadero |
| opción? | consulta | How to return the archived threads. <br /> 1. **name** (default) <br /> 2. **id** |    no     |

## Ejemplo(s)

This will return all archived threads, if any:

```javascript
bot.command({
    name: 'fetchArchivedThreads',
    code: `
  $fetchArchivedThreads[$channelID;name]
  `
});
```

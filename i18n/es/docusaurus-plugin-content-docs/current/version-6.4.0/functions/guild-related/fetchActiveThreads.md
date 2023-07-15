---
title: '$fetchActiveThreads'
description: '$fetchActiveThreads will return all active threads of a given channel.'
id: fetchActiveThreads
---

`$fetchActiveThreads` will return all active threads of a given channel.

## Modo de uso

```php
$fetchActiveThreads[channelID;option?]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                                  | Requerido |
| ------- | -------- | ------------------------------------------------------------------------------------------- |:---------:|
| canalID | entero   | Channel ID of the channel of which you want to fetch the active threads of.                 | verdadero |
| opción? | consulta | How to return the active threads. <br /> 1. **name** (default) <br /> 2. **id** |    no     |

## Ejemplo(s)

This will return all active threads, if any:

```javascript
bot.command({
    name: 'fetchActiveThreads',
    code: `
  $fetchActiveThreads[$channelID;name]
  `
});
```
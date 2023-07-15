---
title: '$cloneChannel'
description: '$cloneChannel will clone a channel.'
id: cloneChannel
---

`$cloneChannel` will clone a channel.

## Modo de uso

```php
$cloneChannel[channelID;name;returnID?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                          | Requerido |
| --------- | -------- | ------------------------------------------------------------------- |:---------:|
| canalID   | entero   | The ID of the channel which is to clone.                            | verdadero |
| name      | consulta | The new name of the cloned channel.                                 | verdadero |
| returnID? | string   | If the function should return the ID of the newly created channnel. |   falso   |

**It won't clone any messages of that channel.**

## Ejemplo(s)

This will clone the current channel and name it "new channel":

```javascript
bot.command({
    name: 'cloneChannel',
    code: `
  $cloneChannel[$channelID;new channel;false]
  `
});
```

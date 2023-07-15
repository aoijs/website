---
title: '$setChannelTopic'
description: '$setChannelTopic modificará el tema de un canal.'
id: setChannelTopic
---

`$setChannelTopic` devolverá el tema del canal dado.

## Uso

```php
$setChannelTopic[canalID;tema]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                 | Requerido |
| ------- | -------- | ------------------------------------------ |:---------:|
| canalID | entero   | El ID del canal cuyo tema será modificado. | verdadero |
| topic   | consulta | Contenido del nuevo tema del canal.        | verdadero |

## Ejemplo(s)

Esto creará una invitación del canal donde se ejecuta el comando en:

```javascript
bot.command({
    name: 'setChannelTopic',
    code: `
   $setChannelTopic[$channelID;Hola! ¡Este es el nuevo tema del canal!]`
});
```
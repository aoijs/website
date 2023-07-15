---
title: '$channelTopic'
description: '$channelTopic devolverá el tema del canal dado.'
id: channelTopic
---

`$channelTopic` devolverá el tema del canal dado.

## Modo de uso

```php
$channelTopic[canalID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                                      | Requerido |
| -------- | ------- | --------------------------------------------------------------- |:---------:|
| canalID? | integer | ID del canal del que quieres que te devuelva el tema del canal. |    no     |

## Ejemplo(s)

Esto devolverá el tema del canal en el que se ejecuta el comando:

```javascript
bot.command({
    name: 'channelTopic',
    code: `
  $channelTopic[$channelID]
  `
});
```
---
title: '$messageSlice'
description: '$messageSlice cortará un mensaje.'
id: messageSlice
---

`$messageSlice` cortará un mensaje.

## Uso

```php
$messageSlice[from;to?]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                | Requerido |
| ------- | ------ | ----------------------------------------- |:---------:|
| de      | número | Punto de partida donde cortar el mensaje. | verdadero |
| ¿hacer? | número | Punto final donde termina el corte.       |    no     |

## Ejemplo(s)

Esto cortará el mensaje del primer mensaje al quinto mensaje:

```javascript
bot.command({
    name: 'messageSlice',
    code: `
  $messageSlice[1;5]
  `
});
```

---
title: '$isVoice'
description: '$isVoice comprobará si el canal dado es un canal de voz o no.'
id: isVoice
---

`$isVoice` comprobará si el canal dado es un canal de voz o no.

## Uso

```php
$isVoice[channelID]
```

## Parámetros

| Campo   | Tipo    | Parámetros                                                | Requerido |
| ------- | ------- | --------------------------------------------------------- |:---------:|
| canalID | integer | ID del canal que quieres comprobar si es un canal de voz. | verdadera |

## Ejemplo(s)

Esto retornará `verdadero` o `falso` dependiendo de lo que uses como argumento:

```javascript
bot.command({
    name: 'isVoice',
    code: `
  $isVoice[$channelID]
  `
});
```
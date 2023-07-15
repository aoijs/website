---
title: '$sendTTS'
description: '$sendTTS enviará un mensaje de texto a voz en un canal determinado.'
id: sendTTS
---

`$sendTTS` enviará un mensaje de texto a voz en un canal determinado.

## Uso

```php
$sendTTS[canalID;mensaje;ID de retorno?]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                                                                  | Requerido |
| -------------- | -------- | ------------------------------------------------------------------------------------------- |:---------:|
| canalID        | entero   | El ID del canal donde se enviará el mensaje de texto a voz.                                 | verdadero |
| mensaje        | consulta | El contenido del mensaje directo.                                                           | verdadero |
| ID de retorno? | booleano | ¿Devolver ID del mensaje?  <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

Esto enviará un mensaje TTS en el canal actual:

```javascript
bot.command({
    name: 'sendTTS',
    code: `
   $sendTTS[$channelIDHello!;false]
  `
});
```
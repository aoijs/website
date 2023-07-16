---
title: '$sendCrosspostingMessage'
description: '$sendCrosspostingMessage publicará un mensaje dado en los canales dados.'
id: sendCrosspostingMessage
---

`$sendCrosspostingMessage` publicará un mensaje dado en los canales dados.

## Uso

```php
$sendCrosspostingMessage[contenido;...ID de canal]
```

## Parámetros

| Campo      | Tipo   | Parámetros                    | Requerido |
| ---------- | ------ | ----------------------------- |:---------:|
| contenido  | cadena | El mensaje a enviar.          | verdadero |
| ...canalID | entero | Dónde enviar el mensaje dado. | verdadero |

## Ejemplo(s)

Esto enviará un mensaje a varios canales en su servidor:

```javascript
bot.command({
    name: 'sendCrosspostingMessage',
    code: `
   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]
  `
});
```

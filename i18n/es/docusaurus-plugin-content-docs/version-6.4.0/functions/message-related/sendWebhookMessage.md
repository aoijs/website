---
title: '$sendWebhookMessage'
description: '$sendWebhookMessage enviará un mensaje usando un webhook existente.'
id: sendWebhookMessage
---

$sendWebhookMessage enviará un mensaje usando un webhook existente.

## Uso

```php
$sendWebhookMessage[ID de webhook;Token de webhook;contenido;ID de retorno?]
```

## Parámetros

| Campo            | Tipo     | Parámetros                                                                                  | Requerido |
| ---------------- | -------- | ------------------------------------------------------------------------------------------- |:---------:|
| ID de webhook    | entero   | El ID del webhook.                                                                          | verdadero |
| Token de webhook | consulta | Token del webhook.                                                                          | verdadero |
| contenido        | string   | El contenido del mensaje a enviar.                                                          | verdadero |
| ID de retorno?   | boolean  | ¿Devolver ID del mensaje?  <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

Esto creará un webhook y enviará un mensaje usando:

```javascript
bot.command({
    name: 'sendWebhookMessage',
    code: `
   $sendWebhookMessage[$splitText[1];$splitText[2];Hello!;false]
   $textSplit[$createWebhook[$channelID;$username;$userAvatar;Testing!;,];,]
  ` 
/* Usar $textSplit para dividir el ID y el Token en partes separadas para usarlo en sendWebhookMessage
 $splitText[1] es igual a la ID del webhook
$splitText[2] es igual al token de webhook
  */
});
```
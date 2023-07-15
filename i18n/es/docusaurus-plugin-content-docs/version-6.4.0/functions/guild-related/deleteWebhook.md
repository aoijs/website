---
title: '$deleteWebhook'
description: '$deleteWebhook creará una pegatina.'
id: deleteWebhook
---

`$deleteWebhook` creará una pegatina.

## Uso

```php
$deleteWebhook[identificador de webhook;token de webhook]
```

## Parámetros

| Campo                    | Tipo     | Parámetros            | Requerido |
| ------------------------ | -------- | --------------------- |:---------:|
| identificador de webhook | entero   | ID del mensaje.       | verdadero |
| Token de webhook         | consulta | El token del webhook. | verdadero |

## Ejemplo(s)

Esto baneará a un usuario aleatorio de tu gremio:

```javascript
bot.command({
    name: 'deleteWebhook',
    code: `
  $deleteWebhook[webhookID;webhookToken]
  ` // reemplazar los campos que la información real.

});
```
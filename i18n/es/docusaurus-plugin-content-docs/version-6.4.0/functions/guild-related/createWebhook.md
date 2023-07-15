---
title: '$createWebhook'
description: '$createWebhook creará un webhook.'
id: createWebhook
---

`$createWebhook` creará una pegatina.

## Uso

```php
$createWebhook[Canal ID;nombre;avatar;razon;sep?]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                                               | Requerido |
| ------- | -------- | -------------------------------------------------------------------------------------------------------- |:---------:|
| canalID | entero   | ID del gremio del lugar en el que se creará la pegatina.                                                 | verdadero |
| name    | consulta | Nombre para mostrar el webhook.                                                                          | verdadero |
| avatar  | string   | La url del avatar del webhook.                                                                           |    sí     |
| ¿razón? | string   | Razón que se mostrará en los registros de auditoría del gremio.                                          |    sí     |
| sep?    | cadena   | El separador que se utilizará para separar credenciales importantes como token e ID, predeterminado `,`. |    no     |

## Ejemplo(s)

Esto creará un hilo en el canal actual:

```javascript
bot.command({
    name: 'createWebhook',
    code: `
  $createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];Just testing.;, ]
  `
});
```

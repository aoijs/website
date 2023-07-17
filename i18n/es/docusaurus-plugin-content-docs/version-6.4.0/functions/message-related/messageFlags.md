---
title: '$messageFlags'
description: '$messageFlags devolverá las banderas de un mensaje.'
id: messageFlags
---

`$messageFlags` devolverá las banderas de un mensaje.

## Uso

```php
$messageFlags[ID de mensaje;sep?;canalID?]
```

## Parámetros

| Campo         | Tipo     | Parámetros                                       | Requerido |
| ------------- | -------- | ------------------------------------------------ |:---------:|
| ID de mensaje | entero   | ID del mensaje.                                  | verdadero |
| sep?          | consulta | Separador para separar varios valores devueltos. |   falso   |
| canalID?      | entero   | ID del canal en el que se encuentra el mensaje.  |   falso   |

## Ejemplo(s)

Esto hará las banderas de mensaje de tu mensaje de comando inicial:

```javascript
bot.command({
    name: 'messageFlags',
    code: `
  $messageFlags[$messageID;, ;$channelID]
  `
});
```

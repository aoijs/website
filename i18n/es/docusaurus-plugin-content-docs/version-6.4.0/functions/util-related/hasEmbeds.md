---
title: '$hasEmbeds'
description: '$hasEmbeds comprobará si hay incrustaciones adjuntas al mensaje.'
id: hasEmbeds
---

`$hasEmbeds` comprobará si hay incrustaciones adjuntas al mensaje.

## Uso

```php
$hasEmbeds[ID de mensaje;canalID?]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                               | Requerido |
| ------------- | ------ | -------------------------------------------------------- |:---------:|
| ID de mensaje | entero | ID del mensaje para comprobar si contiene un incrustado. | verdadero |
| canalID       | entero | ID del canal en el que se encuentra el mensaje.          | verdadero |

## Ejemplo(s)

Esto devolverá `false` ya que no hay incrustaciones adjuntas a tu mensaje:

```javascript
bot.command({
    name: 'hasEmbeds',
    code: `
  $hasEmbeds[$messageID;$channelID]
  `
});
```

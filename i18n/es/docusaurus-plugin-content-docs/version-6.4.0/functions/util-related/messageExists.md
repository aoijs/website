---
title: '$messageExists'
description: '$messageExists comprobará si existe un mensaje específico.'
id: messageExists
---

`$messageExists` verificará si existe un mensaje específico.

## Uso

```php
$messageExists[messageID;channelID?]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                    | Requerido |
| ------------- | ------ | --------------------------------------------- | --------- |
| ID de mensaje | entero | el id del mensaje                             | verdadero |
| canalID?      | entero | el id del canal donde se encuentra el mensaje | no        |

## Ejemplo(s)

Esto devolverá `falso` ya que el mensaje no existe en el canal dado:

```javascript
bot.command({
    name: 'messageExists',
    code: `
  $messageExists[1058998634823299143;$channelID]
  `
});
```

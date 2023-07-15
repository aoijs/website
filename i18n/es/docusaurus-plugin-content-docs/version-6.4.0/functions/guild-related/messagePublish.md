---
title: '$messagePublish'
description: '$messagePublish publicará un mensaje en un canal de anuncios.'
id: messagePublish
---

`$messagePublish` publicará un mensaje en un canal de anuncios.

## Uso

```php
$messagePublish[ID de mensaje;canalID?]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                      | Requerido |
| ------------- | ------ | ----------------------------------------------- |:---------:|
| ID de mensaje | entero | El ID del mensaje que debe ser publicado.       | verdadero |
| canalID?      | entero | ID del canal en el que se encuentra el mensaje. |   falso   |

## Ejemplo(s)

Esto publicará un mensaje ( sólo funcionará en los canales de anuncio):

```javascript
bot.command({
    name: 'messagePublish',
    code: `
  $messagePublish[$get[msgID];$channelID]
  $let[msgID;$sendMessage[Hello!;true]]
  `
});
```

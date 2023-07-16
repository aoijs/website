---
title: '$channelSendMessage'
description: '$channelSendMessage enviará un mensaje en un canal específico.'
id: channelSendMessage
---

`$channelSendMessage` enviará un mensaje en un canal específico.

## Uso

```php
$channelSendMessage[canalID;contenido;devolverID?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                    | Requerido |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------- |:---------:|
| canalID     | entero   | A dónde se enviará el mensaje.                                                                                | verdadero |
| contenido   | consulta | Cuál debe ser el contenido del mensaje.                                                                       | verdadero |
| devolverID? | booleano | Si el ID del mensaje debe ser devuelto o no. <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

Esto enviará "¡Hola!" al canal actual:

```javascript
bot.command({
    name: 'channelSendMessage',
    code: `
  $channelSendMessage[$channelID;¡Hola!!;false]
  `
});
```

### Embeds

Esto enviará un embed con descripción y footer al canal actual:

```javascript
bot.command({
    name: 'channelSendMessage',
    code: `
  $channelSendMessage[$channelID;{newEmbed:{title:Hola}{footer:Adios}};false]
  `
});
```

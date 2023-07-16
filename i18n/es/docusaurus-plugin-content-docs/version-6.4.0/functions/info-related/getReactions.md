---
title: '$getReactions'
description: '$getReactions devolverá propiedades sobre una reacción dada en un mensaje específico.'
id: getReactions
---

`$getReactions` devolverá propiedades sobre una reacción dada en un mensaje específico.

## Uso

```php
$getReactions[canalID;mensajeID;reacción;forzar?;opción?]
```

## Parámetros

| Campo         | Tipo    | Parámetros                                                                                                                                                                                                                                         | Requerido |
| ------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| canalID       | entero  | ID del canal en el que se encuentra el mensaje.                                                                                                                                                                                                    | verdadero |
| ID de mensaje | entero  | ID del mensaje.                                                                                                                                                                                                                                    | verdadero |
| reacciones    | string  | La reacción de la que devolver la información.                                                                                                                                                                                                     |    sí     |
| forzar?       | boolean | 1. **true** (por defecto) <br /> 2. **false**                                                                                                                                                                                                |   falso   |
| opción?       | cadena  | Cómo devolverá los usuarios que reaccionaron a ese mensaje <br /> 1. **username** (por defecto) - devuelve los nombres de usuario   <br /> 2. **mention** - menciona a los usuarios <br /> 3. **id** - devuelve el id de usuario |    no     |

**Tenga en cuenta que esto no funcionará sin la intención `GuildMessageReactions`.**

## Ejemplo(s)

Esto mencionará a todos los usuarios que reaccionaron a su mensaje, en este caso, sólo a su bot:

```javascript
bot.command({
    name: 'getReactions',
    code: `
$getReactions[$channelID;$messageID;👋;true;mention]
$addCmdReactions[👋]
  `
});
```
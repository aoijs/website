---
title: '$interactionDeferUpdate'
description: '$interactionDeferUpdate difiere el mensaje de interacción que se actualizará.'
id: interactionDeferUpdate
---

`$interactionDeferUpdate` difiere el mensaje de interacción que se actualizará.

## Uso

```php
$interactionDeferUpdate[efímero]
```

## Parámetros

| Campo   | Tipo     | Descripción                              | Requerido |
| ------- | -------- | ---------------------------------------- |:---------:|
| efímero | booleano | ¿Visible solo para el autor del comando? | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: 'exampleButton',
    type: 'interaction',
    prototype: 'button',
    code: ` 
   $interactionFollowUp[Este es el primer mensaje!]
   $interactionEdit[Este es el segundo mensaje!]
   $interactionDeferUpdate[true]`
});
```
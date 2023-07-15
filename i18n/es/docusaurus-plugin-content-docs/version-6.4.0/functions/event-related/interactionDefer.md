---
title: '$interactionDefer'
description: '$interactionDefer aplaza una Interacción de los últimos 15 minutos.'
id: interactionDefer
---

`$interactionDefer` aplaza una Interacción de los últimos 15 minutos.

## Uso

```php
$interactionDefer[efímero]
```

## Parámetros

| Campo    | Tipo     | Descripción                              | Requerido |
| -------- | -------- | ---------------------------------------- |:---------:|
| efemeral | booleano | ¿Visible solo para el autor del comando? | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: 'exampleButton',
    type: 'interaction',
    prototype: 'button',
    code: `
   $interactionFollowUp[Este es el segundo mensaje!] 
   $interactionFollowUp[Este es el primer mensaje!] 
   $interactionDefer[true]`
});
```
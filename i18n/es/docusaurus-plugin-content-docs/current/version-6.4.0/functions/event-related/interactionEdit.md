---
title: '$interactionEdit'
description: '$interactionEdit devolverá editar una interacción.'
id: interactionEdit
---

`$interactionEdit` devolverá editar una interacción.

## Uso

```php
$interactionEdit[contenido?;incrusta?;componentes?;archivos?;permitidoMenciones?]
```

## Parámetros

| Campo                  | Tipo   | Descripción                                                                                              | Requerido |
| ---------------------- | ------ | -------------------------------------------------------------------------------------------------------- |:---------:|
| contenido?             | cadena | Nuevo contenido del mensaje.                                                                             |   falso   |
| incrusta?              | cadena | Analizador incrustado.                                                                                   |   falso   |
| componentes            | cadena | Analizador de componentes.                                                                               |   falso   |
| archivos?              | cadena | analizador de archivos.                                                                                  |   falso   |
| ¿Menciones permitidas? | cadena | ¿Menciones permitidas? <br /> 1. **usuarios** <br /> 2. **roles** <br /> 3. **todos ** |   falso   |

## Ejemplo(s)

```javascript
bot.interactionCommand({
    name: "interactionEdit",
    prototype: "slash",
    code: `
  $interactionEdit[¡Adiós, mundo!;;;;everyone]
  $wait[5s]
  $interactionReply[¡Hola Mundo!;;;;everyone;false]
  `
});
```

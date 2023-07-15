---
title: '$interactionReply'
description: '$interactionReply le permite enviar una respuesta de mensaje de interacción.'
id: interactionReply
---

`$interactionReply` le permite enviar una respuesta de mensaje de interacción.

## Uso

```php
$interactionReply[contenido?;incrusta?;componentes?;archivos?;permitidoMenciones?;efímero?]
```

## Parámetros

| Campo                  | Tipo     | Descripción                                                                                                    | Requerido |
| ---------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |:---------:|
| contenido?             | cadena   | Contenido del mensaje.                                                                                         |   falso   |
| incrusta?              | cadena   | Analizador incrustado.                                                                                         |   falso   |
| ¿componentes?          | cadena   | Analizador de componentes.                                                                                     |   falso   |
| archivos?              | cadena   | analizador de archivos.                                                                                        |   falso   |
| ¿Menciones permitidas? | cadena   | ¿Menciones permitidas? <br /> 1. **todos ** <br /> 2. **roles** <br /> 3. **usuarios**       |   falso   |
| efímero?               | booleano | ¿Visible solo para el autor del comando? <br /> 1. **Verdadero** <br /> 2. **falso** (por defecto) |   falso   |

## Ejemplo(s)

```javascript
bot.interactionCommand({
    name: "interactionReply",
    prototype: "slash", // button/selectMenu/slash
    code: `
  $interactionReply[Hola mundo!;;;;everyone;false]
  `
});
```

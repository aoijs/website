---
title: '$interactionFollowUp'
description: '$interactionFollowUp se puede usar para solicitudes JSON, información de canciones o reproducción de pistas, ya que estas cosas tardan más de 3 segundos.'
id: interactionFollowUp
---

`$interactionFollowUp` se puede usar para solicitudes JSON, información de canciones o reproducción de pistas, ya que estas cosas requieren más de 3 segundos.

## Uso

```php
$interactionFollowUp[contenido?;incrusta?;componentes?;archivos?;efímero?]
```

## Parámetros

| Campo         | Tipo     | Descripción                                                                                                    | Requerido |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------- |:---------:|
| contenido?    | cadena   | Contenido del mensaje.                                                                                         |   falso   |
| incrusta?     | cadena   | Analizador incrustado.                                                                                         |   falso   |
| ¿componentes? | cadena   | Analizador de componentes.                                                                                     |   falso   |
| archivos?     | cadena   | analizador de archivos.                                                                                        |   falso   |
| efímero?      | booleano | ¿Visible solo para el autor del comando? <br /> 1. **Verdadero** <br /> 2. **falso** (por defecto) |   falso   |

## Ejemplo(s)

```javascript
bot.interactionCommand({
    name: "interactionFollowUp",
    prototype: "slash",
    code: `
  $interactionFollowUp[Adiós mundo!]
  $interactionDefer[true]
  `
});
```

---
title: '$awaitComponents'
description: '$awaitComponents espera componentes para una determinada cantidad de usos.'
id: awaitComponents
---

`$awaitComponents` espera componentes para una determinada cantidad de usos.

## Uso

```php
$awaitComponents[ID de mensaje;filtro de usuario
;ID personalizado;comandos;mensaje de error?;usos?;esperar datos?]
```

## Parámetros

| Campo             | Tipo   | Descripción                                                                                                       | Requerido |
| ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------- | :-------: |
| ID de mensaje     | entero | Mensaje ID.                                                                                                       | verdadero |
| filtro de usuario | cadena | A lo que el bot responderá <br /> 1. **todos ** <br /> 2. **ID de usuario específico** - cualquier ID de usuario. | verdadero |
| ID personalizado  | cadena | ID personalizado.                                                                                                 | verdadero |
| comandos          | cadena | comandos que se ejecutarán, puede separar varios comandos con una coma ( `,` )                                    | verdadero |
| mensaje de error? | cadena | mensaje de error cuando expira el comando                                                                         |   falso   |
| ¿usos?            | entero | cuantos usos hasta que el componente deja de funcionar                                                            |   falso   |
| esperar datos?    | cadena | datos esperados.                                                                                                  |   falso   |
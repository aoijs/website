---
title: '$awaitComponentsUntil'
description: '$awaitComponentsUntil espera los componentes del mensaje.'
id: awaitComponentsUntil
---

`$awaitComponentsUntil` espera los componentes del mensaje.

## Uso

```php
$awaitComponentsUntil[CanalID;ID de mensaje;filtro de usuario;tiempo;ID personalizados;comandos;mensaje de error?;esperar datos?]
```

## Parámetros

| Campo             | Tipo   | Descripción                                                                                                      | Requerido |
| ----------------- | ------ | ---------------------------------------------------------------------------------------------------------------- | :-------: |
| canalID           | cadena | ID del canal.                                                                                                    | verdadero |
| ID de mensaje     | cadena | Mensaje ID.                                                                                                      | verdadero |
| filtro de usuario | entero | A lo que el bot responderá <br /> 1. **todos ** <br /> 2. **ID de usuario específico** - cualquier ID de usuario | verdadero |
| reacciones        | cadena | Reacciones que escuchará el bot, puede separar varios emojis con una coma ( `,` )                                | verdadero |
| comandos          | cadena | Comandos que se ejecutarán, puedes separar múltiples emojis con una coma (`,`)                                   | verdadero |
| mensaje de error? | cadena | Mensaje de error cuando caduca el comando.                                                                       |   falso   |
| esperar datos?    | cadena | Datos esperados.                                                                                                 |   falso   |
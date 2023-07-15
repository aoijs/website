---
title: '$componentCollector'
description: '$componentCollector creará un colector para los componentes dados.'
id: componentCollector
---

`$componentCollector` creará un colector para los componentes dados.

## Uso

```php
$componentCollector[ID de mensaje;filtro de usuario;tiempo;ID personalizados;comandos;mensaje de error?;comando final?;esperar datos?]
```

## Parámetros

| Campo             | Tipo   | Descripción                                                                                                                   | Requerido |
| ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |:---------:|
| ID de mensaje     | entero | El ID del mensaje.                                                                                                            | verdadero |
| filtro de usuario | cadena | A lo que el bot responderá. <br /> 1. **todos ** <br /> 2. **ID de usuario específico** - cualquier ID de usuario | verdadero |
| tiempo            | cadena | Cuando el comando final/expire.                                                                                               | verdadero |
| ID personalizado  | cadena | El ID del componente.                                                                                                         | verdadero |
| comandos          | cadena | Comandos que se ejecutarán, puedes separar múltiples emojis con una coma (`,`)                                                | verdadero |
| mensaje de error? | cadena | Mensaje de error cuando caduca el comando.                                                                                    |   falso   |
| comando final?    | entero | Comando de fin que se ejecutará cuando se ejecutaron comandos anteriores.                                                     |   falso   |
| esperar datos?    | cadena | Datos esperados.                                                                                                              |   falso   |

---
title: '$newApplicationCmd'
description: '$newApplicationCmd Devolverá verdadero o falso según el tipo de interacción.'
id: newApplicationCmd
---

`$newApplicationCmd` obtiene los datos de las devoluciones de llamada de la aplicación (actualiza y crea una).

## Uso

```php
$newApplicationCmd[nombre]
```

## Parámetros

| Campo  | Tipo   | Descripción         | Requerido |
| ------ | ------ | ------------------- |:---------:|
| opción | cadena | Opción a recuperar. | verdadero |

### Opción

| Campo               | Tipo   | Descripción                                                           |
| ------------------- | ------ | --------------------------------------------------------------------- |
| nombre              | cadena | Nombre del comando de barra.                                          |
| id                  | entero | ID de la barra común.                                                 |
| descripción         | cadena | Descripción de la barra común.                                        |
| versión             | entero | Versión del comando slash.                                            |
| opción              | cadena | Opciones del comando slash.                                           |
| servidorID          | entero | ID de gremio del comando de barra oblicua.                            |
| ID de aplicación    | entero | Devuelve el ID de la aplicación.                                      |
| Permiso por defecto | cadena | Devuelve los permisos predeterminados del comando slash.              |
| marca de tiempo     | cadena | Devuelve la marca de tiempo de la creación del comando slash (en ms). |
| Creado en           | cadena | Devuelve la fecha de creación del comando slash.                      |

## Ejemplo(s)

```js
bot.applicationCmdUpdateCommand({
    channel: "channelid",
    code: `
    ¡El comando de barra se actualizó!

- Nombre: $newApplicationCmd[name]
- ID: $newApplicationCmd[id]
- ID de aplicación: $newApplicationCmd[applicationID]`
})
```
- Este código se ejecutará cuando __comando de barra se actualice__ (Modificado)
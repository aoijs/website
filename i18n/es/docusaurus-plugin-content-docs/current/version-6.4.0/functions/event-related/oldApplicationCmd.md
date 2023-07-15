---
title: '$oldApplicationCmd'
description: '$oldApplicationCmd obtiene los datos de las devoluciones de llamada de la aplicación (actualiza y elimina una)'
id: oldApplicationCmd
---

`$oldApplicationCmd` obtiene los datos de las devoluciones de llamada de la aplicación (actualiza y elimina una)

## Uso

```php
$oldApplicationCmd[opción]
```

## Parámetros

| Campo  | Tipo   | Descripción         | Requerido |
| ------ | ------ | ------------------- |:---------:|
| opción | cadena | Opción a recuperar. | verdadero |

### Opciones

| Campo             | Tipo   | Descripción                                                           |
| ----------------- | ------ | --------------------------------------------------------------------- |
| name              | cadena | Nombre del comando de barra.                                          |
| id                | entero | ID de la barra común.                                                 |
| description       | cadena | Descripción de la barra común.                                        |
| version           | entero | Versión del comando slash.                                            |
| options           | cadena | Opciones del comando slash.                                           |
| guildID           | entero | ID de gremio del comando de barra oblicua.                            |
| applicationID     | entero | Devuelve el ID de la aplicación.                                      |
| defaultPermission | cadena | Devuelve los permisos predeterminados del comando slash.              |
| timestamp         | cadena | Devuelve la marca de tiempo de la creación del comando slash (en ms). |
| createdAt         | cadena | Devuelve la fecha de creación del comando slash.                      |

## Ejemplo(s)

```js
bot.applicationCmdUpdateCommand({
    channel: "channelid",
    code: `
    ¡El comando de barra se actualizó!

- Nuevo Nombre: $newApplicationCmd[name]
 - Nombre: $oldApplicationCmd[name]
- Nuevo Descripción: $newApplicationCmd[description]
 - Descripción antigua: $oldApplicationCmd[description]`
})
```
- Este código se ejecutará cuando __comando de barra se actualice__ (Modificado)
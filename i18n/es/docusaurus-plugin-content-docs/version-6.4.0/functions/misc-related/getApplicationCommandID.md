---
title: '$getApplicationCommandID'
description: '$getApplicationCommandID devolverá el ID de un comando de aplicación determinado.'
id: getApplicationCommandID
---

`$getApplicationCommandID` eliminará un comando de aplicación.

## Uso

```php
$getApplicationCommandID[nombre;tipo?]
```

## Parámetros

| Campo  | Tipo     | Parámetros                                                                                                                      | Requerido |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| nombre | consulta | Nombre del comando de la aplicación.                                                                                            | verdadero |
| tipo?  | consulta | Tipo de comando de aplicación. <br /> 1. **global** (default) <br /> 2. **guildID** - sustituir por ID de servidor) |   falso   |

## Ejemplo(s)

Esto devolverá el ID de un comando de aplicación llamado "ejemplo", (si existe):

```javascript
bot.command({
    name: "getApplicationCommandID",
    code: `
  $getApplicationCommandID[example;global]
  `
});
```
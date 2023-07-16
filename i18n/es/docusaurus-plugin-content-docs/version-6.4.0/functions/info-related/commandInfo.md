---
title: '$commandInfo'
description: '$commandInfo devolverá el texto dado de una propiedad.'
id: commandInfo
---

`$commandInfo` devolverá el texto dado de una propiedad.

## Uso

```php
$commandInfo[nombre;opción]
```

## Parámetros

| Campo  | Tipo     | Parámetros                  | Requerido |
| ------ | -------- | --------------------------- |:---------:|
| nombre | consulta | Nombre del comando o alias. | verdadero |
| opción | consulta | Propiedad a recuperar.      | verdadero |

## Ejemplo(s)

Esto devolverá el uso (definido por las propiedades añadidas) del comando:

* Puedes añadir lo que quieras, por ejemplo "uso" como se indica a continuación.
* Puede utilizar alias o el nombre del comando para obtener su información.

```javascript
bot.command({
    name: 'commandInfo',
    aliases: ["ci", "cmdInfo"],
    uso: "commandInfo [command]",
    code: `
  Modo de uso: $commandInfo[ci;uso]
  `
});
```
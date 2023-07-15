---
title: '$createRole'
description: '$createRole creará un nuevo rol de guild.'
id: createRole
---

`$createRole` creará un nuevo rol de gremio.

## Uso

```php
$createRole[servidorID;ID de retorno;nombre;color;icono;izar;unicodeEmoji;posición;mencionable;...permisos]
```

## Parámetros

| Campo         | Tipo     | Parámetros                                            | Requerido |
| ------------- | -------- | ----------------------------------------------------- |:---------:|
| servidorID    | entero   | ID del servidor desde el que se contarán los canales. | verdadero |
| ID de retorno | boolean  | El nombre del canal recién creado?                    | verdadero |
| nombre        | string   | El nombre del nuevo rol.                              | verdadero |
| color         | entero   | El nombre del nuevo rol.                              | verdadero |
| icono         | cadena   | La URL de la imagen que se utilizará como icono.      |   falso   |
| izar          | booleano | Si hay que elevar el nuevo papel.                     | verdadero |
| unicodeEmoji  | cadena   | La URL de la imagen que se utilizará como icono.      |   falso   |
| position      | entero   | La posición del papel, 1 siendo la parte inferior.    | verdadero |
| mencionable   | boolean  | Si el rol es mencionado por `@everyone`.              | verdadero |
| ...permisos   | string   | Permisos que tendrá el rol.                           |   falso   |

## Ejemplo(s)

Esto creará un nuevo rol llamado "Bird" en el color rojo:

```javascript
bot.command({
    name: 'createRole',
    code: `
    $createRole[$guildID;false;Bird;FF0000;;false;❤;1;false;sendmessages]`
});
```

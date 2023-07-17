---
title: '$findRoles'
description: '$findRoles devolverá todos los roles que coincidan dependiendo de la consulta dada.'
id: findRoles
---

`$findRoles` devolverá todos los roles correspondientes dependiendo de la consulta dada.

## Uso

```php
$findRoles[rolResolver;límite?;tipo?;formato?]
```

## Parámetros

| Campo        | Tipo   | Parámetros                                      | Requerido |
| ------------ | ------ | ----------------------------------------------- |:---------:|
| resolver rol | cadena | Consulta para coincidir.                        | verdadero |
| límite?      | número | La cantidad de resultados que el bot regresará. |   falso   |
| tipo?        | cadena | Tipo de consulta de búsqueda.                   |   falso   |
| formato?     | cadena | Formateando para la salida.                     |   falso   |

### Parámetros para el argumento `formato`

* {position} -> devuelve la posición
* {id} -> devuelve el ID de usuario
* {username} -> devuelve el nombre de usuario

## Ejemplo(s)

Esto devolverá todos los roles que se llaman `Owner`:

```javascript
bot.command({
    name: 'findRoles',
    code: `
  $findRoles[Owner;5;startsWith;{position}) {username}: {id}]
  `
});
```

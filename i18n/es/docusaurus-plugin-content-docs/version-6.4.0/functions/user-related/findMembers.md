---
title: '$findMembers'
description: '$findMembers devolverá todos los miembros con un nombre de usuario similar.'
id: findMembers
---

`$findMembers` devolverá todos los miembros con un nombre de usuario similar.

## Uso

```php
$findMembers[usuarioResolver;límite?;tipo?;forzar?;formato?]
```

## Parámetros

| Campo            | Tipo    | Parámetros                                                                            | Requerido |
| ---------------- | ------- | ------------------------------------------------------------------------------------- |:---------:|
| usuario Resolver | cadena  | Consulta del nombre de usuario que buscará el bot.                                    | verdadero |
| límite?          | número  | La cantidad de resultados que el bot regresará.                                       |   falso   |
| tipo?            | cadena  | Tipo de consulta de búsqueda.                                                         |   falso   |
| forzar?          | boolean | 1. **true** <br /> 2. **false** (por defecto)                                   |   falso   |
| formato?         | cadena  | El formato que el bot devolverá a los usuarios encontrados (listados a continuación). |   falso   |

### Parámetros para el argumento `formato`

* {position} -> devuelve la posición
* {id} -> devuelve el ID de usuario
* {username} -> devuelve el nombre de usuario
* {nick} -> devuelve el nick
* {tag} -> devuelve el discriminador de usuario

## Ejemplo(s)

Esto devolverá veinte miembros con `Leref` en su nombre de usuario:

```javascript
bot.command({
    name: 'findMembers',
    code: `
  $findMembers[Leref;20;startsWith;true;{position}) {username}#{tag}]
  `
});
```

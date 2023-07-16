---
title: '$getLeaderboardInfo'
description: '$getLeaderboardInfo devolverá información sobre una variable determinada ordenada en una tabla de clasificaciones.'
id: getLeaderboardInfo
---

`$getLeaderboardInfo` devolverá información sobre una variable determinada ordenada en una tabla de clasificaciones.

## Uso

```php
$getLeaderboardInfo[variable;id;type;option]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                                                                      | Requerido |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| varname | consulta | Nombre variable.                                                                                                                | verdadero |
| id      | entero   | Usuario/guild/canal/mensaje ID.                                                                                                 | verdadero |
| type    | string   | Tipo variable <br /> 1. **globalUser** <br /> 2. **usuario** <br /> 3. **servidor** <br /> 4. **canal** |    sí     |
| opción  | string   | Opción para devolver <br /> 1. **top** (por defecto) <br /> **valor**                                               |    sí     |

## Ejemplo(s)

Esto devolverá la posición del gremio actual:

```javascript
bot.command({
    name: "getLeaderboardInfo",
    code: `
    $getLeaderboardInfo[Example;$guildID;server;top]
    `
});
```
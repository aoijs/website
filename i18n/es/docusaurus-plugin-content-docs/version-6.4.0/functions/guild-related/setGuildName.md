---
title: '$setGuildName'
description: '$setGuildName cambiará el nombre de un gremio.'
id: setGuildName
---

$setGuildName cambiará el nombre de un gremio.

## Uso

```php
$setGuildName[nombre;servidorID?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                     | Requerido |
| ----------- | -------- | ---------------------------------------------- |:---------:|
| nombre      | consulta | El nuevo nombre del gremio.                    | verdadero |
| servidorID? | entero   | El ID de la guild cuyo nombre será modificado. |   falso   |

## Ejemplo(s)

Esto cambiará el nombre del gremio en el que ejecutas el comando a tu nombre de usuario:

```javascript
bot.command({
    name: 'setGuildName',
    code: `
   $setGuildName[$username[$authorID];$guildID]`
});
```
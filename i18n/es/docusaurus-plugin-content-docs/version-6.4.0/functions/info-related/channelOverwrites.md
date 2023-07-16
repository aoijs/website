---
title: '$channelOverwrites'
description: '$channelOverwrites devolverá las sobreescrituras del canal dado.'
id: channelOverwrites
---

`$channelOverwrites` devolverá las sobreescrituras del canal dado.

## Uso

```php
$channelOverwrites[canalID?;respuesta?;sep?]
```

## Parámetros

| Campo      | Tipo   | Descripción                                                       | Requerido |
| ---------- | ------ | ----------------------------------------------------------------- |:---------:|
| canalID?   | entero | ID del canal del que desea que se sobrescriba el canal.           |   falso   |
| respuesta? | string | El formato en el que se devolverán las sobreescrituras del canal. |    no     |
| sep?       | string | El separador para dividir el canal sobrescribe si hay múltiples.  |    no     |

|    Tipo     | Salida                          |
|:-----------:| ------------------------------- |
| `{mention}` | Menciona el rol o el usuario    |
|  `{type}`   | Devuelve el tipo, usuario o rol |
|  `{allow}`  | Permisos concedidos             |
|  `{deny}`   | Los permisos denegados          |

## Ejemplo(s)

Esto devolverá las sobreescrituras del canal en el que se ejecuta el comando:

```javascript
bot.command({
    name: 'channelOverwrites',
    code: `
  $channelOverwrites[$channelID;{mention} {type} {allow} {deny};, ]
  `
});
```
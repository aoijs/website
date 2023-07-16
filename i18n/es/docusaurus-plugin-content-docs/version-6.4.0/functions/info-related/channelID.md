---
title: '$channelID'
description: '$channelID devolverá el ID de canal del nombre de canal dado.'
id: channelID
---

`$channelID` devolverá el ID de canal del nombre de canal dado.

## Uso

```php
$channelID[nombre?]
```

## Parámetros

| Campo   | Tipo    | Parámetros                                     | Requerido |
| ------- | ------- | ---------------------------------------------- |:---------:|
| nombre? | integer | Nombre del canal del que desea el ID de canal. |    no     |

## Ejemplo(s)

Esto devolverá el ID del canal en el que se ejecuta el comando:

```javascript
bot.command({
    name: 'channelID',
    code: `
  $channelID
  `
});
```
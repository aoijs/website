---
title: '$channelName'
description: '$channelName devolverá el nombre del canal dado.'
id: channelName
---

`$channelName` devolverá el nombre del canal dado.

## Modo de uso

```php
$channelName[canalID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                    | Requerido |
| -------- | ------- | --------------------------------------------- |:---------:|
| canalID? | integer | ID del canal del que desea obtener el nombre. |    no     |

## Ejemplo(s)

Esto devolverá el nombre del canal en el que ejecutó el comando:

```javascript
bot.command({
    name: 'channelName',
    code: `
  $channelName[$channelID]
  `
});
```
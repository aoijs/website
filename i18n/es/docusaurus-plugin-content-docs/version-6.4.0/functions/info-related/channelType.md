---
title: '$channelType'
description: '$channelType devolverá el tipo de canal dado.'
id: channelType
---

`$channelType` devolverá el tipo de canal dado.

## Uso

```php
$channelType[canalID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                            | Requerido |
| -------- | ------- | ----------------------------------------------------- |:---------:|
| canalID? | integer | ID del canal que desea que devuelva el tipo de canal. |    no     |

## Ejemplo(s)

Esto devolverá el tipo de canal en el que se ejecuta el comando:

```javascript
bot.command({
    name: 'channelType',
    code: `
  $channelType[$channelID]
  `
});
```
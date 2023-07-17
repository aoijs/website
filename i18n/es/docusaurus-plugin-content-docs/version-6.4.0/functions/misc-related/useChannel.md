---
title: '$useChannel'
description: '$useChannel usará el canal especificado y ejecutará toda la función dentro de él en su lugar.'
id: useChannel
---

`$useChannel` usará el canal especificado y ejecutará toda la función dentro de él en su lugar.

## Uso

```php
$useChannel[canalID]
```

## Parámetros

| Campo   | Tipo    | Parámetros                    | Requerido |
| ------- | ------- | ----------------------------- |:---------:|
| canalID | integer | Dónde ejecutar las funciones. | verdadera |

## Ejemplo(s)

Esto enviará una inserción en el canal actual:

```javascript
bot.command({
    name: "useChannel",
    code: `
    $description[Hola!]
    $useChannel[$channelID]
    `
});
```
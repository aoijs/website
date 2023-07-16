---
title: '$channelCategoryID'
description: '$channelCategoryID devolverá el padre de un canal específico.'
id: channelCategoryID
---

`$channelCategoryID` devolverá el padre de un canal específico.

## Uso

```php
$channelCategoryID[canalID?]
```

## Parámetros

| Campo    | Tipo    | Parámetros                                           | Requerido |
| -------- | ------- | ---------------------------------------------------- |:---------:|
| canalID? | integer | ID de un canal del que se quiere recuperar su padre. |    no     |

## Ejemplo(s)

Esto devolverá el ID de categoría del canal de texto en el que ejecute el comando:

```javascript
bot.command({
    name: 'channelCategoryID',
    code: `
  $channelCategoryID[$channelID]
  `
});
```
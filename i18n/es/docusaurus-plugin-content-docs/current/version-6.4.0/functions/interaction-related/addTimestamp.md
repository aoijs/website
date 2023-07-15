---
title: '$addTimestamp'
description: '$addTimestamp will add a timestamp to an embed.'
id: addTimestamp
---

`$addTimestamp` will add a timestamp to an embed.

## Modo de uso

```php
$addTimestamp[ms?]
```

## Parámetros

| Campo | Tipo    | Parámetros  | Requerido |
| ----- | ------- | ----------- |:---------:|
| ms    | integer | Epoch Time. |    no     |

## Ejemplo(s)

This will create a embed with timestamp and description:

```javascript
bot.command({
    name: 'addTimestamp',
    code: `
  $description[Hello!]
  $addTimestamp
  `
});
```

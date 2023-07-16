---
title: '$useChannel'
description: '$useChannel will use the specified channel and execute all function inside of it instead.'
id: useChannel
---

`$useChannel` will use the specified channel and execute all function inside of it instead.

## Uso

```php
$useChannel[channelID]
```

## Parámetros

| Campo   | Tipo    | Parámetros                      | Requerido |
| ------- | ------- | ------------------------------- |:---------:|
| canalID | integer | Where to execute the functions. | verdadera |

## Ejemplo(s)

This will send an embed in the current channel:

```javascript
bot.command({
    name: "useChannel",
    code: `
    $description[Hello!]
    $useChannel[$channelID]
    `
});
```
---
title: '$wait'
description: '$wait will delay functions from executing for a given time.'
id: wait
---

`$wait` will delay functions from executing for a given time.

## Modo de uso

```php
$wait[time]
```

## Parámetros

| Campo  | Tipo           | Parámetros                       | Requerido |
| ------ | -------------- | -------------------------------- |:---------:|
| tiempo | cadena, número | How long to delay the execution. | verdadera |

## Ejemplo(s)

This will send an embed delayed:

```javascript
bot.command({
    name: "wait",
    code: `
    $description[Hello!]
    $wait[5s]
    $sendMessage[Oh, what's that?]
    `
});
```
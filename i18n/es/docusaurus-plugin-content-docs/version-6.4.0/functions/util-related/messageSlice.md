---
title: '$messageSlice'
description: '$messageSlice will slice a message.'
id: messageSlice
---

`$messageSlice` will slice a message.

## Uso

```php
$messageSlice[from;to?]
```

## Parámetros

| Campo | Tipo   | Parámetros                                 | Requerido |
| ----- | ------ | ------------------------------------------ |:---------:|
| from  | número | Starting point where to slice the message. | verdadero |
| to?   | número | Ending point where slicing ends.           |    no     |

## Ejemplo(s)

This will slice the message from the first message to the fifth message:

```javascript
bot.command({
    name: 'messageSlice',
    code: `
  $messageSlice[1;5]
  `
});
```

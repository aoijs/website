---
title: '$message'
description: '$message will return given arguments of a message.'
id: message
---

`$message` will return given arguments of a message.

## Modo de uso

```php
$message[index?]
```

## Parámetros

| Campo  | Tipo    | Parámetros                                                                           | Requerido |
| ------ | ------- | ------------------------------------------------------------------------------------ |:---------:|
| index? | integer | Which message argument will be returned, leave it empty to return the whole message. |    no     |

## Ejemplo(s)

This will return your given message:

```javascript
bot.command({
    name: 'message',
    code: `
  You said: "$message"
  ` // [prefix]message Hello!
});
```

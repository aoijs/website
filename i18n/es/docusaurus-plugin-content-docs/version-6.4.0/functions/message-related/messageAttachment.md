---
title: '$messageAttachment'
description: '$messageAttachment will return a message attachment depending on the given index.'
id: messageAttachment
---

`$messageAttachment` will return a message attachment depending on the given index.

## Modo de uso

```php
$messageAttachment[index?]
```

## Parámetros

| Campo  | Tipo    | Parámetros                                              | Requerido |
| ------ | ------- | ------------------------------------------------------- |:---------:|
| index? | integer | The index of which message attachment will be returned. |    no     |

## Ejemplo(s)

This will return your given attachment:

```javascript
bot.command({
    name: 'messageAttachment',
    code: `
  You had the following attachment in your message: $messageAttachment
  `
});
```

---
title: '$noMentionMessage'
description: '$noMentionMessage devolverá la parte del mensaje que no contiene mención.'
id: noMentionMessage
---

`$noMentionMessage` devolverá la parte del mensaje que no contiene ninguna mención.

## Uso

```php
$noMentionMessage[args]
```

## Parámetros

| Campo  | Tipo   | Parámetros            | Requerido |
| ------ | ------ | --------------------- |:---------:|
| ¿args? | cadena | Posición del mensaje. |   falso   |

## Ejemplo(s)

```javascript
bot.command({
    name: "noMentionMessage",
    code: `
    $noMentionMessage[1]
    `
});
```
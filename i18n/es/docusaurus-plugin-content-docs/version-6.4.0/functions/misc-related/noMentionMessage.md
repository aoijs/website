---
title: '$noMentionMessage'
description: '$noMentionMessage will return the part of the message which contains no mention.'
id: noMentionMessage
---

`$noMentionMessage` will return the part of the message which contains no mention.

## Uso

```php
$noMentionMessage[args]
```

## Parámetros

| Campo | Tipo   | Parámetros        | Requerido |
| ----- | ------ | ----------------- |:---------:|
| args? | string | Message position. |    no     |

## Ejemplo(s)

```javascript
bot.command({
    name: "noMentionMessage",
    code: `
    $noMentionMessage[1]
    `
});
```
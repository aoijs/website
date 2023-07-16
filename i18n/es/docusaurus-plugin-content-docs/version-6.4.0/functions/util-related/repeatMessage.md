---
title: '$repeatMessage'
description: '$repeatMessage will repeat the given text for given amount of times.'
id: repeatMessage
---

`$repeatMessage` will repeat the given text for given amount of times.

## Uso

```php
$repeatMessage[time;text]
```

## Parámetros

| Campo  | Tipo     | Parámetros                                  | Requerido |
| ------ | -------- | ------------------------------------------- |:---------:|
| tiempo | entero   | The amount of times the text gets repeated. | verdadero |
| text   | consulta | The text that will get repeated.            | verdadero |

## Ejemplo(s)

This will return `Hello` twenty times:

```javascript
bot.command({
    name: 'repeatMessage',
    code: `
  $repeatMessage[20;Hello ]
  `
});
```

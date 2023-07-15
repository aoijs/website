---
title: '$filterMessage'
description: '$filterMessage will filter certain characters out of given text.'
id: filterMessage
---

`$filterMessage` will filter certain characters out of given text.

## Modo de uso

```php
$filterMessage[text;...letters]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                    | Requerido |
| ------- | -------- | --------------------------------------------- |:---------:|
| text    | consulta | Text input which will be filtered.            | verdadero |
| letters | consulta | Content you want to filter out of the `text`. | verdadero |

## Ejemplo(s)

This will remove the `N` of `Never` and return `ever`:

```javascript
bot.command({
    name: 'filterMessage',
    code: `
  $filterMessage[Never;N]
  `
});
```

---
title: '$filterMessage'
description: '$filterMessage filtrará ciertos caracteres de un texto dado.'
id: filterMessage
---

`$filterMessage` filtrará ciertos caracteres de un texto dado.

## Uso

```php
$filterMessage[texto;...letras]
```

## Parámetros

| Campo  | Tipo   | Parámetros                                     | Requerido |
| ------ | ------ | ---------------------------------------------- |:---------:|
| texto  | cadena | Entrada de texto que será filtrada.            | verdadero |
| Letras | cadena | Contenido que desea filtrar fuera del `texto`. | verdadero |

## Ejemplo(s)

Esto dividirá `N` de `Never` y devuelve `ever`:

```javascript
bot.command({
    name: 'filterMessage',
    code: `
  $filterMessage[Never;N]
  `
});
```

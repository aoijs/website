---
title: '$parseTime'
description: '$parseTime convertirá cualquier tiempo humano en milisegundos.'
id: parseTime
---

`$parseTime` convertirá cualquier tiempo humano en milisegundos.

## Uso

```php
$parseTime[time]
```

## Parámetros

| Campo  | Tipo   | Parámetros                          | Requerido |
| ------ | ------ | ----------------------------------- |:---------:|
| tiempo | string | El tiempo que se convertirá a `ms`. | verdadera |

## Ejemplo(s)

Esto convertirá `69 minutos` a milisegundos y devolverá `4140000`:

```javascript
bot.command({
    name: 'parseTime',
    code: `
  $parseTime[69m]
  `
});
```

Esto convertirá `1w 2d 20m` a milisegundos y devolverá `778800000`:

```javascript
bot.command({
    name: 'parseTime',
    code: `
  $parseTime[1w 2d 20m]
  `
});
```

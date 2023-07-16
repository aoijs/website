---
title: '$replaceText'
description: '$replaceText reemplazará segmentos específicos de texto.'
id: replaceText
---

`$replaceText` reemplazará segmentos específicos de texto.

## Uso

```php
$replaceText[text;replacer;replaceTo;times?]
```

## Parámetros

| Campo        | Tipo     | Parámetros                                                                   | Requerido |
| ------------ | -------- | ---------------------------------------------------------------------------- |:---------:|
| text         | consulta | Texto que desea modificar.                                                   | verdadero |
| replacer     | consulta | El texto que será reemplazado.                                               | verdadero |
| reemplazar a | string   | El texto que reemplazará `replacer`.                                         |    sí     |
| ¿veces?      | número   | Cuántas veces `replaceTo` reemplaza a `replacer`. / Usa `-1` para el último. |   falso   |

## Ejemplo(s)

Esto reemplazará `M` con `D` y la salida será `burro`:

```javascript
bot.command({
    name: 'replaceText',
    code: `
  $replaceText[Monkey;M;D]
  `
});
```

### Ejemplo avanzado

Esto reemplazará la palabra `café` dos veces usando el último [campo](#parameters) de `$replaceText`:

```javascript
bot.command({
    name: 'replaceText',
    code: `
  $replaceText[Me encanta beber café, ¡Coffee me da poder! Coffee es malo para mi salud.;Coffee;jugo naranja;2]
  `
});
```

Esto reemplazará `Ferel` y `son` usando múltiples `$replaceText`:

```javascript
bot.command({
    name: 'replaceText',
    code: `
  $replaceText[$replaceText[Leref and Ferel are the same person.;Ferel;Ayaka];are;are no]
  `
});
```

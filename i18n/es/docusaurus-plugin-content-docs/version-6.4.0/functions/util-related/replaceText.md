---
title: '$replaceText'
description: '$replaceText will replace specific segments of text.'
id: replaceText
---

`$replaceText` will replace specific segments of text.

## Uso

```php
$replaceText[text;replacer;replaceTo;times?]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                                   | Requerido |
| --------- | -------- | ---------------------------------------------------------------------------- |:---------:|
| text      | consulta | Text you want to modify.                                                     | verdadero |
| replacer  | consulta | The text that will be replaced.                                              | verdadero |
| replaceTo | string   | The text that will replace `replacer`.                                       |    sí     |
| times?    | número   | How many times `replaceTo` replaces `replacer`. / Use `-1` for the last one. |   falso   |

## Ejemplo(s)

This will replace `M` with `D` and the output will be `Donkey`:

```javascript
bot.command({
    name: 'replaceText',
    code: `
  $replaceText[Monkey;M;D]
  `
});
```

### Advanced Example

This will replace the word `coffee` two times using the last [field](#parameters) of `$replaceText`:

```javascript
bot.command({
    name: 'replaceText',
    code: `
  $replaceText[I love drinking Coffee, Coffee gives me power! Coffee is bad for my health.;Coffee;orange juice;2]
  `
});
```

This will replace `Ferel` and `are` using multiple `$replaceText`:

```javascript
bot.command({
    name: 'replaceText',
    code: `
  $replaceText[$replaceText[Leref and Ferel are the same person.;Ferel;Ayaka];are;are not]
  `
});
```

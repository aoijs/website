---
title: '$replaceText'
description: '$replaceText will replace specific segments of text.'
id: replaceText
---

`$replaceText` will replace specific segments of text.

## الاستخدام

```php
$replaceText[text;replacer;replaceTo;times?]
```

## البارامترات

| Field     | النوع  | الديسكبربشين                                                                 | مطلوب |
| --------- | ------ | ---------------------------------------------------------------------------- |:-----:|
| text      | string | Text you want to modify.                                                     | true  |
| replacer  | string | The text that will be replaced.                                              | true  |
| replaceTo | string | The text that will replace `replacer`.                                       | true  |
| times?    | number | How many times `replaceTo` replaces `replacer`. / Use `-1` for the last one. | false |

## مثال

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

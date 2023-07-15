---
title: '$indexOf'
description: '$indexOf will return the index of the given character.'
id: indexOf
---

`$indexOf` will return the index of the given character.

## الاستخدام

```php
$indexOf[string;char]
```

## البارامترات

| Field  | النوع  | الديسكبربشين                                    | مطلوب |
| ------ | ------ | ----------------------------------------------- |:-----:|
| string | string | The text the bot will be checking the index of. | true  |
| char   | string | The characters the bot will be checking for.    | true  |

## مثال

This will return `8` as it's the first occurring position of the character `w`:

```javascript
bot.command({
    name: 'indexOf',
    code: `
  $indexOf[Hello, what is wrong with you?;w]
  `
});
```

---
title: '$findObjectProperty'
description: '$findObjectProperty will search for a given property of an object and return it.'
id: findObjectProperty
---

`$findObjectProperty` will search for a given property of an object and return it.

## الاستخدام

```php
$findObjectProperty[property;object]
```

## البارامترات

| Field    | النوع  | الديسكبربشين          | مطلوب |
| -------- | ------ | --------------------- |:-----:|
| property | string | Name of the property. | true  |
| object   | object | The object to search. | true  |

## مثال

This will return `{"object": "property"}` as it was able to find "object":

```javascript
bot.command({
    name: 'findObjectProperty',
    code: `
  $findObjectProperty[object;{"aoijs": "leref", "object": "property"}]
  `
});
```

---
title: '$removeObjectProperty'
description: '$removeObjectProperty will remove a property of an object.'
id: removeObjectProperty
---

`$removeObjectProperty` will remove a property of an given object.

## الاستخدام

```php
$removeObjectProperty[property;object]
```

## البارامترات

| Field    | النوع  | الديسكبربشين          | مطلوب |
| -------- | ------ | --------------------- |:-----:|
| property | string | Name of the property. | true  |
| object   | object | The object.           | true  |

## مثال

This will remove `Ferel` from the given object:

```javascript
bot.command({
    name: 'removeObjectProperty',
    code: `
  $removeObjectProperty[Ferel;{"aoimusic": "ayaka", "leref": "ferel"}]
  `
});
```

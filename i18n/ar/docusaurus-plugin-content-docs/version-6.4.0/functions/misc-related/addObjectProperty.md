---
title: '$addObjectProperty'
description: '$addObjectProperty will add a property to an existing object.'
id: addObjectProperty
---

`$addObjectProperty` will add a property to an existing object.

## الاستخدام

```php
$addObjectProperty[name;value]
```

## البارامترات

| Field | النوع  | الديسكبربشين           | مطلوب |
| ----- | ------ | ---------------------- |:-----:|
| name  | string | Name of the property.  | true  |
| value | string | Value of the property. | true  |

## مثال

This will return `Ferel` from the `Leref` Property:

```javascript
bot.command({
    name: 'addObjectProperty',
    code: `
  $getObjectProperty[Leref]
  $addObjectProperty[Leref;Ferel]
  $createObject[{}]
  `
});
```

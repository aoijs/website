---
title: '$addObjectProperty'
description: '$addObjectProperty will add a property to an existing object.'
id: addObjectProperty
---

`$addObjectProperty` will add a property to an existing object.

## प्रोयोग

```php
$addObjectProperty[name;value]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन           | चाहिए |
| ----- | -------- | ---------------------- |:-----:|
| name  | स्ट्रिंग | Name of the property.  | true  |
| value | स्ट्रिंग | Value of the property. | true  |

## ट्रू (हा)

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

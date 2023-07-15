---
title: '$removeObjectProperty'
description: '$removeObjectProperty will remove a property of an object.'
id: removeObjectProperty
---

`$removeObjectProperty` will remove a property of an given object.

## प्रोयोग

```php
$removeObjectProperty[property;object]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन          | चाहिए |
| -------- | -------- | --------------------- |:-----:|
| property | स्ट्रिंग | Name of the property. | true  |
| object   | object   | The object.           | true  |

## ट्रू (हा)

This will remove `Ferel` from the given object:

```javascript
bot.command({
    name: 'removeObjectProperty',
    code: `
  $removeObjectProperty[Ferel;{"aoimusic": "ayaka", "leref": "ferel"}]
  `
});
```

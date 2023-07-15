---
title: '$findObjectProperty'
description: '$findObjectProperty will search for a given property of an object and return it.'
id: findObjectProperty
---

`$findObjectProperty` will search for a given property of an object and return it.

## प्रोयोग

```php
$findObjectProperty[property;object]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन          | चाहिए |
| -------- | -------- | --------------------- |:-----:|
| property | स्ट्रिंग | Name of the property. | true  |
| object   | object   | The object to search. | true  |

## ट्रू (हा)

This will return `{"object": "property"}` as it was able to find "object":

```javascript
bot.command({
    name: 'findObjectProperty',
    code: `
  $findObjectProperty[object;{"aoijs": "leref", "object": "property"}]
  `
});
```

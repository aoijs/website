---
title: '$getObjectProperty'
description: '$getObjectProperty will return a object property of a given object.'
id: getObjectProperty
---

`$getObjectProperty` will return a object property of a given object.

## प्रोयोग

```php
$getObjectProperty[name]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                 | चाहिए |
| ----- | -------- | ---------------------------- |:-----:|
| name  | स्ट्रिंग | Name of the object property. | true  |

## ट्रू (हा)

This will return the object property of "hello" created in `$createObject`:

```javascript
bot.command({
    name: "getObjectProperty",
    code: `
    $getObjectProperty[hello]
    $createObject[{"hello": "bye"}]
    `
});
```
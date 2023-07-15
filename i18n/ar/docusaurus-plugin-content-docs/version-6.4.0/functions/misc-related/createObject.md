---
title: '$createObject'
description: '$createObject will create a new object.'
id: createObject
---

`$createObject` will create a new object.

## الاستخدام

```php
$createObject[object]
```

## البارامترات

| Field  | النوع  | الديسكبربشين | مطلوب |
| ------ | ------ | ------------ |:-----:|
| object | object | Json object. | true  |

## مثال

```javascript
bot.command({
    name: "createObject",
    code: `
  $createObject[{
    "hello": "bye",
    "bye": "hello"
  }]
  `
});
```
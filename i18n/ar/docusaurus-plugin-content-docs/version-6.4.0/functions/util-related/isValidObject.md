---
title: '$isValidObject'
description: '$isValidObject checks if the given json is a valid object.'
id: isValidObject
---

`$isValidObject` checks if the given json is a valid object.

## الاستخدام

```php
$isValidObject[object]
```

## البارامترات

| Field  | النوع  | الديسكبربشين | مطلوب |
| ------ | ------ | ------------ |:-----:|
| object | object | JSON object. | true  |

## مثال

This will return `true` as the given object is a valid JSON object:

```javascript
bot.command({
    name: 'isValidObject',
    code: `
  $isValidObject[{"name":"Leref", "aoijs":"nice"}]
  `
});
```

---
title: '$randomString'
description: '$randomString will generate a random string.'
id: randomString
---

`$randomString` will generate a random string.

## الاستخدام

```php
$randomString[range;diffExec?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                          | مطلوب |
| --------- | ------- | ------------------------------------- |:-----:|
| range     | number  | Range of the random generated string. | true  |
| diffExec? | boolean |                                       | false |

## مثال

This will return a random string of twenty characters:

```javascript
bot.command({
    name: 'randomString',
    code: `
  $randomString[20]
  `
});
```

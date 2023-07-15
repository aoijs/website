---
title: '$abbreviate'
description: '$abbreviate will allow you to abbreviate large numbers.'
id: abbreviate
---

`$abbreviate` will allow you to abbreviate large numbers.

## प्रोयोग

```php
$abbreviate[num;dec?]
```

## पैरामीटर्स

| फील्ड | टाइप    | डिस्क्रिप्शन                    |    चाहिए     |
| ----- | ------- | ------------------------------- |:------------:|
| num   | integer | Number to abbreviate.           |     true     |
| dec?  | integer | Decimal between the abbreviate. | असत्य (नहीं) |

## ट्रू (हा)

This returns: `20k`

```javascript
bot.command({
    name: 'abbreviate',
    code: `
  $abbreviate[20000]
  `
});
```

This returns: `20.0k`

```javascript
bot.command({
    name: 'abbreviate',
    code: `
  $abbreviate[20000;1]
  `
});
```

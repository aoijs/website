---
title: '$isVariableExist'
description: '$isVariableExist checks if a given variable exists in a given table.'
id: isVariableExist
---

`$isVariableExist` checks if a given variable exists in a given table.

## प्रोयोग

```php
$isVariableExist[variable;table?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन       |    चाहिए     |
| -------- | -------- | ------------------ |:------------:|
| variable | स्ट्रिंग | The variable name. |     true     |
| table?   | स्ट्रिंग | The table name.    | असत्य (नहीं) |

## ट्रू (हा)

This will either true or false depending on if a variable called `Example` exists:

```javascript
bot.command({
    name: 'isVariableExist',
    code: `
  $isVariableExist[Example;main]
  `
});
```

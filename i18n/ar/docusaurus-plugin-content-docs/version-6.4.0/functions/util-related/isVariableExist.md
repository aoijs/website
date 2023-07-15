---
title: '$isVariableExist'
description: '$isVariableExist checks if a given variable exists in a given table.'
id: isVariableExist
---

`$isVariableExist` checks if a given variable exists in a given table.

## الاستخدام

```php
$isVariableExist[variable;table?]
```

## البارامترات

| Field    | النوع  | الديسكبربشين       | مطلوب |
| -------- | ------ | ------------------ |:-----:|
| variable | string | The variable name. | true  |
| table?   | string | The table name.    | false |

## مثال

This will either true or false depending on if a variable called `Example` exists:

```javascript
bot.command({
    name: 'isVariableExist',
    code: `
  $isVariableExist[Example;main]
  `
});
```

---
title: '$setVar'
description: '$setVar will change the value of a given global variable.'
id: setVar
---

`$setVar` will change the value of a given global variable.

## الاستخدام

```php
$setVar[varname;value;table?]
```

## البارامترات

| Field   | النوع  | الديسكبربشين        | مطلوب |
| ------- | ------ | ------------------- |:-----:|
| Varname | string | Variable name.      | true  |
| Value   | string | New Variable value. | true  |
| Table?  | string | Variable table.     | false |

## مثال

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setVar",
    code: `
    $setVar[Example;This is a value;main]
    `
});
```
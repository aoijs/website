---
title: '$getVar'
description: '$getVar will return the value of a global variable.'
id: getVar
---

`$getVar` will return the value of a global variable

## الاستخدام

```php
$getVar[varname;table?]
```

## البارامترات

| Field   | النوع  | الديسكبربشين    | مطلوب |
| ------- | ------ | --------------- |:-----:|
| varname | string | Variable name.  | true  |
| table?  | string | Variable table. | false |

## مثال

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getVar",
    code: `
    $getVar[Example;main]
    `
});
```
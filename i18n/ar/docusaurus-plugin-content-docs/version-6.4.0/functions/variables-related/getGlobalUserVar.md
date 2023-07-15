---
title: '$getGlobalUserVar'
description: '$getGlobalUserVar will return the value of a given global user variable.'
id: getGlobalUserVar
---

`$getGlobalUserVar` will return the value of a given global user variable.

## الاستخدام

```php
$getGlobalUserVar[varname;userID?;table?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين    | مطلوب |
| ------- | ------- | --------------- |:-----:|
| varname | string  | Variable name.  | true  |
| userID? | Integer | User ID.        | false |
| table?  | string  | Variable table. | false |

## مثال

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getGlobalUserVar",
    code: `
    $getGlobalUserVar[Example;$authorID;main]
    `
});
```
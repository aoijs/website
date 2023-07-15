---
title: '$setGlobalUserVar'
description: '$setGlobalUserVar will change the value of a given global user variable.'
id: setGlobalUserVar
---

`$setGlobalUserVar` will change the value of a given global user variable.

## الاستخدام

```php
$setGlobalUserVar[varname;value;userID?;table?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين        | مطلوب |
| ------- | ------- | ------------------- |:-----:|
| varname | string  | Variable name.      | true  |
| value   | string  | New Variable value. | true  |
| userID? | Integer | User ID.            | false |
| table?  | string  | Variable table.     | false |

## مثال

This will change the value of "Example" to "This is a value" for the command author:

```javascript
bot.command({
    name: "setGlobalUserVar",
    code: `
    $setGlobalUserVar[Example;This is a value;$authorID;main]
    `
});
```
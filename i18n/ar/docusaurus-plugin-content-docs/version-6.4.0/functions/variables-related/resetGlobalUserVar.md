---
title: '$resetGlobalUserVar'
description: '$resetGlobalUserVar will set a given global user variable to its default value.'
id: resetGlobalUserVar
---

`$resetGlobalUserVar` will set a given global user variable to its default value.

## الاستخدام

```php
$resetGlobalUserVar[varname;table?]
```

## البارامترات

| Field   | النوع  | الديسكبربشين    | مطلوب |
| ------- | ------ | --------------- |:-----:|
| varname | string | Variable name.  | true  |
| table?  | string | Variable table. | false |

## مثال

This will reset a variable called "Example":

```javascript
bot.command({
    name: "resetGlobalUserVar",
    code: `
    $resetGlobalUserVar[Example;main]
    `
});
```
---
title: '$resetGuildVar'
description: '$resetGuildVar will set a given guild variable to its default value.'
id: resetGuildVar
---

`$resetGuildVar` will set a given guild variable to its default value.

## الاستخدام

```php
$resetGuildVar[varname;table?]
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
    name: "resetGuildVar",
    code: `
    $resetGuildVar[Example;main]
    `
});
```
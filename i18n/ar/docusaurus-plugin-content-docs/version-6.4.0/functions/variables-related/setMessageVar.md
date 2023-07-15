---
title: '$setMessageVar'
description: '$setMessageVar will change the value of a given message variable.'
id: setMessageVar
---

`$setMessageVar` will change the value of a given message variable.

## الاستخدام

```php
$setMessageVar[varname;value;messageID?;table?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين        | مطلوب |
| ---------- | ------- | ------------------- |:-----:|
| varname    | string  | Variable name.      | true  |
| value      | string  | New Variable value. | true  |
| messageID? | Integer | Message ID.         | false |
| table?     | string  | Variable table.     | false |

## مثال

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setMessageVar",
    code: `
    $setMessageVar[Example;This is a value;$messageID;main]
    `
});
```
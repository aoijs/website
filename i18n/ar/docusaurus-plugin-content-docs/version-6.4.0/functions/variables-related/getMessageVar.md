---
title: '$getMessageVar'
description: '$getMessageVar will return the value of a given message variable.'
id: getMessageVar
---

`$getMessageVar` will return the value of a given message variable.

## الاستخدام

```php
$getMessageVar[varname;guildID?;table?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين    | مطلوب |
| ---------- | ------- | --------------- |:-----:|
| varname    | string  | Variable name.  | true  |
| messageID? | Integer | message ID      | false |
| table?     | string  | Variable table. | false |

## مثال

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getMessageVar",
    code: `
    $getMessageVar[Example;$messageID;main]
    `
});
```
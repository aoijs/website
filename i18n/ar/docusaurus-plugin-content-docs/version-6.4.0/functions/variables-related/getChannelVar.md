---
title: '$getChannelVar'
description: '$getChannelVar will return the value of a given channel variable.'
id: getChannelVar
---

`$getChannelVar` will return the value of a given channel variable.

## الاستخدام

```php
$getChannelVar[varname;channelID?;table?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين    | مطلوب |
| ---------- | ------- | --------------- |:-----:|
| varname    | string  | Variable name.  | true  |
| channelID? | Integer | Channel ID.     | false |
| table?     | string  | Variable table. | false |

## مثال

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getChannelVar",
    code: `
    $getChannelVar[Example;$channelID;main]
    `
});
```
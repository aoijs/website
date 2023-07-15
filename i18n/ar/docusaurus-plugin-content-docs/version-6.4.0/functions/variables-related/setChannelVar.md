---
title: '$setChannelVar'
description: '$setChannelVar will change the value of a given channel variable.'
id: setChannelVar
---

`$setChannelVar` will change the value of a given channel variable.

## الاستخدام

```php
$setChannelVar[varname;value;channelID?;table?]
```

## البارامترات

| Field      | النوع   | الديسكبربشين        | مطلوب |
| ---------- | ------- | ------------------- |:-----:|
| varname    | string  | Variable name.      | true  |
| value      | string  | New Variable value. | true  |
| channelID? | Integer | Channel ID.         | false |
| table?     | string  | Variable table.     | false |

## مثال

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setChannelVar",
    code: `
    $setChannelVar[Example;This is a value;$channelID;main]
    `
});
```
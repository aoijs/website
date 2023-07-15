---
title: '$setGuildVar'
description: '$setGuildVar will change the value of a given guild variable.'
id: setGuildVar
---

`$setGuildVar` will change the value of a given guild variable.

## الاستخدام

```php
$setGuildVar[varname;value;guildID?;table?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين        | مطلوب |
| -------- | ------- | ------------------- |:-----:|
| varname  | string  | Variable name.      | true  |
| value    | string  | New Variable value. | true  |
| guildID? | Integer | Guild ID.           | false |
| table?   | string  | Variable table.     | false |

## مثال

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setGuildVar",
    code: `
    $setGuildVar[Example;This is a value;$guildID;main]
    `
});
```
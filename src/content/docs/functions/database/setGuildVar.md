---
title: $setGuildVar
description: $setGuildVar will change the value of a given guild variable.
id: setGuildVar
---

`$setGuildVar` will change the value of a given guild variable.

## Usage

```php
$setGuildVar[varname;value;guildID?;table?]
```

## Parameters

| Field    | Type                                                                                              | Description         | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| varname  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.      |   true   |
| value    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New Variable value. |   true   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Guild ID.           |  false   |
| table?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table.     |  false   |

## Example(s)

This will change the value of "Example" to "This is a value":

```javascript
client.command({
    name: "setGuildVar",
    code: `
    $setGuildVar[Example;This is a value;$guildID;main]
    `
});
```

---
title: $resetUserVar
description: $resetUserVar will set a given user variable to it's default value of a given guild.
id: resetUserVar
---

`$resetUserVar` will set a given user variable to it's default value of a given guild.

## Usage

```aoi
$resetUserVar[varname;guildID?;table?]
```

## Parameters

| Field    | Type                                                                                              | Description     | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------- | :------: |
| varname  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.  |   true   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Guild ID.       |  false   |
| table?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table. |  false   |

## Example(s)

This will reset a variable called "Example":

```javascript
client.command({
    name: "resetUserVar",
    code: `
    $resetUserVar[Example;$guildID;main]
    `
});
```

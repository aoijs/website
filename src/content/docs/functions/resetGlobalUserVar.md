---
title: $resetGlobalUserVar
description: $resetGlobalUserVar will set a given global user variable to its default value.
id: resetGlobalUserVar
---

`$resetGlobalUserVar` will set a given global user variable to its default value.

## Usage

```aoi
$resetGlobalUserVar[varname;table?]
```

## Parameters

| Field   | Type                                                                                              | Description     | Required |
| ------- | ------------------------------------------------------------------------------------------------- | --------------- | :------: |
| varname | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.  |   true   |
| table?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table. |  false   |

## Example(s)

This will reset a variable called "Example":

```javascript
client.command({
    name: "resetGlobalUserVar",
    code: `
    $resetGlobalUserVar[Example;main]
    `
});
```

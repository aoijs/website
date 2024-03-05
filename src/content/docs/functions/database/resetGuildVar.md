---
title: $resetGuildVar
description: $resetGuildVar will set a given guild variable to its default value.
id: resetGuildVar
---

`$resetGuildVar` will set a given guild variable to its default value.

## Usage

```php
$resetGuildVar[varname;table?]
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
  name: "resetGuildVar",
  code: `
    $resetGuildVar[Example;main]
    `
});
```

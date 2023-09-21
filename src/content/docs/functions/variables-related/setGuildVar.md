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

| Field    | Type    | Description         | Required |
| -------- | ------- | ------------------- | :------: |
| varname  | string  | Variable name.      |   true   |
| value    | string  | New Variable value. |   true   |
| guildID? | integer | Guild ID.           |  false   |
| table?   | string  | Variable table.     |  false   |

## Example(s)

This will change the value of "Example" to "This is a value":

```javascript
client.command({
  name: "setGuildVar",
  code: `
    $setGuildVar[Example;This is a value;$guildID;main]
    `,
});
```

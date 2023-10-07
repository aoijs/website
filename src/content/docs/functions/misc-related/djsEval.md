---
title: $djsEval
description: $djsEval will execute given discord.js code.
id: djsEval
---

`$djsEval` will execute given discord.js code.

## Usage

```php
$djsEval[code;returnCode?]
```

## Parameters

| Field       | Type   | Description                                                   | Required |
| ----------- | ------ | ------------------------------------------------------------- | :------: |
| code        | string | Discord.js code to execute.                                   |   true   |
| returnCode? | string | Return code. <br /> 1. **true** <br /> 2. **false** (default) |  false   |

## Example(s)

This will return your user ID:

```javascript
client.command({
  name: "djsEval",
  code: `
  $djsEval[msg.author.id;true]
  `
});
```

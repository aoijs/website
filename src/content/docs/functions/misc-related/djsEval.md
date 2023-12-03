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

| Field       | Type                                                                                              | Description                                                   | Required |
| ----------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | :------: |
| code        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Discord.js code to execute.                                   |   true   |
| returnCode? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Return code. <br /> 1. **true** <br /> 2. **false** (default) |  false   |

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

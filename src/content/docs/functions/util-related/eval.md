---
title: $eval
description: $eval will execute given aoi.js code.
id: eval
---

`$eval` will execute given aoi.js code.

## Usage

```php
$eval[code;returnCode?;sendMessage?;returnExecution?;returnID?]
```

## Parameters

| Field            | Type    | Description                                                                                       | Required |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------- | :------: |
| code             | string  | Aoi.js code to execute.                                                                           |   true   |
| returnCode?      | boolean | Return code. <br /> 1. **true** <br /> 2. **false** (default)                                     |  false   |
| sendMessage?     | boolean | Send output. <br /> 1. **true** <br /> 2. **false** (default)                                     |  false   |
| returnExecution? | boolean | Return more information about the executed code. <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| returnID?        | boolean | Return message ID, <br /> 1. **true** <br /> 2. **false** (default)                               |  false   |

## Example(s)

This will return your user ID:

```javascript
client.command({
  name: "eval",
  code: `
    \`\`\`
    $eval[$authorID;true;true;true;true]
    \`\`\`
  `,
});
```

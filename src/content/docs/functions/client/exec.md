---
title: $exec
description: $exec will execute given code in your console.
id: exec
---

`$exec` will execute given code in your console.

## Usage

```php
$exec[code]
```

## Parameters

| Field | Type                                                                                              | Description                      | Required |
| ----- | ------------------------------------------------------------------------------------------------- | -------------------------------- | :------: |
| code  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Code to execute in your console. |   true   |

## Example(s)

This will return your current node version:

```javascript
client.command({
    name: "exec",
    code: `
    \`\`\`
    $exec[node -v]
    \`\`\`
  `
});
```

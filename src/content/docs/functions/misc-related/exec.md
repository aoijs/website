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

| Field | Type   | Description                      | Required |
| ----- | ------ | -------------------------------- | :------: |
| code  | string | Code to execute in your console. |   true   |

## Example(s)

This will return your current node version:

```javascript
bot.command({
  name: "exec",
  code: `
    \`\`\`
    $exec[node -v]
    \`\`\`
  `,
});
```

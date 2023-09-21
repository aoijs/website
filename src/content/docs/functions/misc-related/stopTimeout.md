---
title: $stopTimeout
description: $stopTimeout will end/stop a timeout created by $setTimeout.
id: stopTimeout
---

`$stopTimeout` will end/stop a timeout created by `$setTimeout`.

## Usage

```php
$stopTimeout[id]
```

## Parameters

| Field | Type   | Description | Required |
| ----- | ------ | ----------- | :------: |
| id    | string | Timeout ID. |   true   |

## Example(s)

This will end a `$setTimeout` timeout:

```javascript
client.command({
  name: "stopTimeout",
  code: `
    $stopTimeout[10029]
    `,
});
```

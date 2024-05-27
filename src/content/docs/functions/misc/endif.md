---
title: $endif
description: $endif is used to end an if statement.
id: endif
---

`$endif` is used to end an if statement.

## Usage

```aoi
$endif
```

:::caution[Deprecation]

`$if: "old"` is deprecated and should no longer be used as it will be removed in the future.

:::

## Example(s)

Example usage of `$if: old` (will return "Hello" when the condition is true):

```javascript
client.command({
    name: "endif",
    $if: "old",
    code: `
  $if[1==1]
  Hello!
  $endif
  `
});
```

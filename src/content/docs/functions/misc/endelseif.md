---
title: $endelseif
description: $endelseif is used to end an elseif statement.
id: endelseif
---

`$endelseif` is used to end an elseif statement.

## Usage

```php
$endelseif
```

:::caution[Deprecation]

`$if: "old"` is deprecated and should no longer be used as it will be removed in the future.

:::

## Example(s)

Example usage of `$if: old` (will return "Hello" when the condition is true):

```javascript
client.command({
  name: "if",
  $if: "old",
  code: `
  $if[1==2]
  Hello!
  $elseif[2==4]
  $endelseif
  $endif
  `
});
```

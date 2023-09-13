---
title: $elseif
description: $elseif is used to create an else statement with condition.
id: elseif
---

`$elseif` is used to create an else statement with condition.

## Usage

```php
$elseif[condition]
```

:::caution[Deprecation]

`$if: "old"` is deprecated and should no longer be used as it will be removed in the future.

:::

## Example(s)

Example usage of `$if: old` (will return "Hello" when the condition is true):

You require `$endelseif` to end the `$elseIf` statement.

```javascript
bot.command({
  name: "if",
  $if: "old",
  code: `
  $if[1==2]
  Hello!
  $elseif[2==4]
  $endelseif
  $endif
  `,
});
```

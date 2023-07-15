---
title: $multi
description: $multi operation / multiplication.
id: multi
---

`$multi` will multiplicate given numbers.

## Usage

```php
$multi[num;num]
```

## Parameters

| Field | Type   | Description                   | Required |
| ----- | ------ | ----------------------------- | :------: |
| num   | number | Numbers you want to multiply. |   true   |

## Example(s)

This will return `72` as `8*9` equals that:

```javascript
bot.command({
    name: 'multi',
    code: `
  $multi[8;9]
  `
});
```

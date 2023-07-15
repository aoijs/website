---
title: '$sum'
description: '$sum will sum-up two given numbers.'
id: sum
---

`$sum` will sum-up two given numbers.

## Usage

```php
$sum[num;num]
```

## Parameters

| Field | Type   | Description                          | Required |
| ----- | ------ | ------------------------------------ |:--------:|
| num   | number | Numbers to perform calculation with. |   true   |

## Example(s)

This will return `75` as `70+5` equals `75`:

```javascript
bot.command({
    name: 'sum',
    code: `
  $sum[70;5]
  `
});
```
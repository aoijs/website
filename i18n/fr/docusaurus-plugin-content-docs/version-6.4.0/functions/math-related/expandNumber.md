---
title: '$expandNumber'
description: '$expandNumber will expand any given number.'
id: expandNumber
---

`$expandNumber` will expand any given number.

## Usage

```php
$expandNumber[abbrNumber]
```

## Parameters

| Field      | Type   | Description                | Required |
| ---------- | ------ | -------------------------- |:--------:|
| abbrNumber | string | Number you want to expand. |   true   |

## Example(s)

This will return `1300000`:

```javascript
bot.command({
    name: 'expandNumber',
    code: `
  $expandNumber[1.3m]`
});
```

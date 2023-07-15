---
title: '$divide'
description: '$divide will divide two given numbers.'
id: divide
---

`$divide` will divide two given numbers.

## Usage

```php
$divide[...numbers;...numbers]
```

## Parameters

| Field   | Type   | Description                                | Required |
| ------- | ------ | ------------------------------------------ |:--------:|
| numbers | number | Numbers you want to divide with eachother. |   true   |

## Example(s)

This will return `23` as `69/3` equals it.

```javascript
bot.command({
    name: 'divide',
    code: `
  $divide[69;3]
  `
});
```

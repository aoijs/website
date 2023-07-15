---
title: '$arrayConcat'
description: '$arrayConcat will concat multiple arrays.'
id: arrayConcat
---

`$arrayConcat` will concat multiple arrays.

## Usage

```php
$arrayConcat[separator;...arrays]
```

## Parameters

| Field     | Type   | Description        | Required |
| --------- | ------ | ------------------ |:--------:|
| separator | string | Separator.         |   true   |
| ...arrays | string | Name of the array. |   true   |

## Example(s)

This will return `This is a test` as it concats array 1 and 2:

```javascript
bot.command({
    name: 'arrayConcat',
    code: `
  $arrayConcat[ ;test1;test2]
  $createArray[array1;This is]
  $createArray[array2;a test]
  `
});
```
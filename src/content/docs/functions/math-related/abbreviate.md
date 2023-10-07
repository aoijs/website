---
title: $abbreviate
description: $abbreviate will allow you to abbreviate large numbers.
id: abbreviate
---

`$abbreviate` will allow you to abbreviate large numbers.

## Usage

```php
$abbreviate[num;dec?]
```

## Parameters

| Field | Type    | Description                     | Required |
| ----- | ------- | ------------------------------- | :------: |
| num   | integer | Number to abbreviate.           |   true   |
| dec?  | integer | Decimal between the abbreviate. |  false   |

## Example(s)

This returns: `20k`

```javascript
client.command({
  name: "abbreviate",
  code: `
  $abbreviate[20000]
  `
});
```

This returns: `20.0k`

```javascript
client.command({
  name: "abbreviate",
  code: `
  $abbreviate[20000;1]
  `
});
```

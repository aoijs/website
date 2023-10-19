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

| Field | Type                                                                                                | Description                     | Required |
| ----- | --------------------------------------------------------------------------------------------------- | ------------------------------- | :------: |
| num   | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | Number to abbreviate.           |   true   |
| dec?  | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | Decimal between the abbreviate. |  false   |

## Example(s)

This returns: `20k`

```javascript
client.command({
  name: "abbreviate",
  code: `
  $abbreviate[20000]
  `,
});
```

This returns: `20.0k`

```javascript
client.command({
  name: "abbreviate",
  code: `
  $abbreviate[20000;1]
  `,
});
```

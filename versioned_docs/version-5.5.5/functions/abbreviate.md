---
title: $abbreviate
description: $abbreviate allowing you to abbreviate large numbers.
id: abbreviate
---

This function abbreviates large numbers.

## Usage

```php
$abbreviate[number;decimal?]
```

## Parameters

| Field | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| number | The number is going to abbreviated | number | yes |
| decimal | Separates the number in a decimal way | number | no |

## Abbreviation Types

* `k` — thousands
* `m` — millions
* `b` — billions
* `t` — trillions

## Examples

### Without decimal:

This returns 7k.

```javascript
bot.command({
  name: "abbreviate",
  code: `
  $abbreviate[6900]
  `
});
```

### With decimal:

This returns 7.0k.

```javascript
bot.command({
  name: "abbreviate",
  code: `
  $abbreviate[6983;1]
  `
});
```


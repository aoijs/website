---
title: $parseTime
description: $parseTime will convert any human time to milliseconds.
id: parseTime
---

`$parseTime` will convert any human time to milliseconds.

## Usage

```php
$parseTime[time]
```

## Parameters

| Field | Type                                                                                              | Description                              | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | :------: |
| time  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The time that will be converted to `ms`. |   true   |

## Example(s)

This will convert `69 minutes` to milliseconds and return `4140000`:

```javascript
client.command({
  name: "parseTime",
  code: `
  $parseTime[69m]
  `
});
```

This will convert `1w 2d 20m` to milliseconds and return `778800000`:

```javascript
client.command({
  name: "parseTime",
  code: `
  $parseTime[1w 2d 20m]
  `
});
```

---
title: $random
description: $random will generate a random number between your chosen span.
id: random
---

`$random` will generate a random number between your chosen span.

## Usage

```php
$random[num1;num2;allow?;random?]
```

## Parameters

| Field                        | Type                                                                                                | Description                            | Required |
| ---------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------- | :------: |
| num1                         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Start of the span.                     |   true   |
| num2                         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | End of the span.                       |   true   |
| allow?                       | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Allows returning of decimal numbers.   |  false   |
| [random?](#advanced-Example) | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the returned number will be random. |  false   |

## Example(s)

This will return a random number between `20` and `250`:

```javascript
client.command({
  name: "random",
  code: `
  $random[20;250]
  `
});
```

### Advanced Example

This will return a random decimal number between `25` and `50`:

```javascript
client.command({
  name: "random",
  code: `
  $random[25;50;true]  
  `
});
```

This will return a random number between `45` and `64` and the second `$random` will be random as well:

```javascript
client.command({
  name: "random",
  code: `
  $random[45;65;false;true]
  $random[45;65;false;true]
  `
});
```

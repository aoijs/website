---
title: $message
description: $message will return given arguments of a message.
id: message
---

`$message` will return given arguments of a message.

## Usage

```php
$message[index?]
```

## Parameters

| Field  | Type                                                                                              | Description                                                                          | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | :------: |
| index? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Which message argument will be returned, leave it empty to return the whole message. |  false   |

## Example(s)

This will return your given message:

```javascript
client.command({
  name: "message",
  code: `
  You said: "$message"
  ` // [prefix]message Hello!
});
```

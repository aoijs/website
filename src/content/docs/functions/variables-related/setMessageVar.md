---
title: $setMessageVar
description: $setMessageVar will change the value of a given message variable.
id: setMessageVar
---

`$setMessageVar` will change the value of a given message variable.

## Usage

```php
$setMessageVar[varname;value;messageID?;table?]
```

## Parameters

| Field      | Type                                                                                                | Description         | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| varname    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Variable name.      |   true   |
| value      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | New Variable value. |   true   |
| messageID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | Message ID.         |  false   |
| table?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Variable table.     |  false   |

## Example(s)

This will change the value of "Example" to "This is a value":

```javascript
client.command({
  name: "setMessageVar",
  code: `
    $setMessageVar[Example;This is a value;$messageID;main]
    `,
});
```

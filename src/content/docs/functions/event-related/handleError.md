---
title: $handleError
description: $handleError will return information about an occurred error.
id: handleError
---

`$handleError` will return information about an occurred error.

## Usage

```php
$handleError[option]
```

## Parameters

| Field  | Type                                                                                              | Description                                                                                                                                       | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | What to return the data of. <br /> 1. **function** - function name <br /> 2. **command** - command name <br /> 3. **error** - error that occurred |   true   |

## Example(s)

**You require `events: ["onFunctionError"]` in your main file in order to use this function!**

```javascript
client.functionErrorCommand({
  channel: "channelID (optional)",
  code: `Something went wrong in your "$handleError[command]" command! The function "$handleError[function]" returned the error "$handleError[error]"!`,
});
```

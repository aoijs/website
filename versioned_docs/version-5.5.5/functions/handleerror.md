---
title: $handleError
description: Function that is used in bot.onFunctionError callback.
---

### Usage:

```php
$handleError[option]
```

### Example:

```javascript
bot.functionErrorCommand({
channel: "832704676096245800",
code: `Error: $handleError[error]`
})
bot.onFunctionError()
```

Properties that can be used with $handleError are 
- `function` - Function Name
- `command` - Command  Name
- `error` - Returns Error

Callback for this command: [bot.onFunctionError](../events/bot.onfunctionerror.md)
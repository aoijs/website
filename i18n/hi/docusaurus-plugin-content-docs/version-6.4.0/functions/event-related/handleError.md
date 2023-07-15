---
title: '$handleError'
description: '$handleError will return information about an occurred error.'
id: handleError
---

`$handleError` will return information about an occurred error.

## प्रोयोग

```php
$handleError[option]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन                                                                                                                                                        | चाहिए |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:-----:|
| option | स्ट्रिंग | What to return the data of. <br /> 1. **function** - function name <br /> 2. **command** - command name <br /> 3. **error** - error that occurred | true  |

## ट्रू (हा)

**You require `events: ["onFunctionError"]` in your main file in order to use this function!**

```javascript
bot.functionErrorCommand({
    channel: "channelID (optional)",
    code: `Something went wrong in your "$handleError[command]" command! The function "$handleError[function]" returned the error "$handleError[error]"!`
});
```

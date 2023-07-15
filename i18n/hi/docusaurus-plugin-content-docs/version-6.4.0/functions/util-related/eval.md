---
title: '$eval'
description: '$eval will execute given aoi.js code.'
id: eval
---

`$eval` will execute given aoi.js code.

## प्रोयोग

```php
$eval[code;returnCode?;sendMessage?;returnExecution?;returnID?]
```

## पैरामीटर्स

| फील्ड            | टाइप     | डिस्क्रिप्शन                                                                                                  |    चाहिए     |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------- |:------------:|
| code             | स्ट्रिंग | Aoi.js code to execute.                                                                                       |     true     |
| returnCode?      | boolean  | Return code. <br /> 1. **true** <br /> 2. **false** (default)                                     | असत्य (नहीं) |
| sendMessage?     | boolean  | Send output. <br /> 1. **true** <br /> 2. **false** (default)                                     | असत्य (नहीं) |
| returnExecution? | boolean  | Return more information about the executed code. <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |
| returnID?        | boolean  | Return message ID, <br /> 1. **true** <br /> 2. **false** (default)                               | असत्य (नहीं) |

## ट्रू (हा)

This will return your user ID:

```javascript
bot.command({
    name: "eval",
    code: `
    \`\`\`
    $eval[$authorID;true;true;true;true]
    \`\`\`
  `
});
```
---
title: '$djsEval'
description: '$djsEval will execute given discord.js code.'
id: djsEval
---

`$djsEval` will execute given discord.js code.

## प्रोयोग

```php
$djsEval[code;returnCode?]
```

## पैरामीटर्स

| फील्ड       | टाइप     | डिस्क्रिप्शन                                                              |    चाहिए     |
| ----------- | -------- | ------------------------------------------------------------------------- |:------------:|
| code        | स्ट्रिंग | Discord.js code to execute.                                               |     true     |
| returnCode? | स्ट्रिंग | Return code. <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will return your user ID:

```javascript
bot.command({
    name: "djsEval",
    code: `
  $djsEval[msg.author.id;true]
  `
});
```
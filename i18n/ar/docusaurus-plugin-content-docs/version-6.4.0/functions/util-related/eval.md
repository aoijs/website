---
title: '$eval'
description: '$eval will execute given aoi.js code.'
id: eval
---

`$eval` will execute given aoi.js code.

## الاستخدام

```php
$eval[code;returnCode?;sendMessage?;returnExecution?;returnID?]
```

## البارامترات

| Field            | النوع   | الديسكبربشين                                                                           | مطلوب |
| ---------------- | ------- | -------------------------------------------------------------------------------------- |:-----:|
| code             | string  | Aoi.js code to execute.                                                                | true  |
| returnCode?      | boolean | Return code. <br /> 1. true. false (default)                                     | false |
| sendMessage?     | boolean | Send output. <br /> 1. true. false (default)                                     | false |
| returnExecution? | boolean | Return more information about the executed code. <br /> 1. true. false (default) | false |
| returnID?        | boolean | Return message ID, <br /> 1. true. false (default)                               | false |

## مثال

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
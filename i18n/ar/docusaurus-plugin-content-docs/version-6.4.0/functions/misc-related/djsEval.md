---
title: '$djsEval'
description: '$djsEval will execute given discord.js code.'
id: djsEval
---

`$djsEval` will execute given discord.js code.

## الاستخدام

```php
$djsEval[code;returnCode?]
```

## البارامترات

| Field       | النوع  | الديسكبربشين                                       | مطلوب |
| ----------- | ------ | -------------------------------------------------- |:-----:|
| code        | string | Discord.js code to execute.                        | true  |
| returnCode? | string | Return code. <br /> 1. true. false (default) | false |

## مثال

This will return your user ID:

```javascript
bot.command({
    name: "djsEval",
    code: `
  $djsEval[msg.author.id;true]
  `
});
```
---
title: '$exec'
description: '$exec will execute given code in your console.'
id: exec
---

`$exec` will execute given code in your console.

## الاستخدام

```php
$exec[code]
```

## البارامترات

| Field | النوع  | الديسكبربشين                     | مطلوب |
| ----- | ------ | -------------------------------- |:-----:|
| code  | string | Code to execute in your console. | true  |

## مثال

This will return your current node version:

```javascript
bot.command({
    name: "exec",
    code: `
    \`\`\`
    $exec[node -v]
    \`\`\`
  `
});
```
---
title: '$exec'
description: '$exec will execute given code in your console.'
id: exec
---

`$exec` will execute given code in your console.

## प्रोयोग

```php
$exec[code]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                     | चाहिए |
| ----- | -------- | -------------------------------- |:-----:|
| code  | स्ट्रिंग | Code to execute in your console. | true  |

## ट्रू (हा)

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
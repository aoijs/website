---
title: $textTrim
description: Removes useless spaces from given text.
---

This function removes all useless spaces \(multiple spaces in a row\) from the given text, so all the spaces be replaced with one space.

Raw usage: `$textTrim[text]`

#### Example Command:

If you use the example below, the bot would return `Hello, how are you?`

```javascript
bot.command({
name: "trim",
code: `
$textTrim[     Hello,         how are      you?]
`
})
```


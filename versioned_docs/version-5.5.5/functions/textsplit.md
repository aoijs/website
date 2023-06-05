---
title: $textSplit
description: Splits a text by separator
---

This function separates text from the given separator

## Usage

```php
$textSplit[text;separator]
```

### Example

```javascript
bot.command({
name: "textSplit",
code: `
$splitText[2] = bye
$splitText[1] = hi
$textSplit[hi/bye;/]`
//Separator would be '/'
})
```


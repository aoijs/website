---
title: $splitText
description: Grabs split Text value from $textSplit by given index
---

This function grabs  the value from the given index

```php
$splitText[index]
```


Index = the position of the text
 

```javascript
bot.command({
name: "splitText",
code: `
$splitText[2] = bye
$splitText[1] = hi
$textSplit[hi/bye;/]`
})
```


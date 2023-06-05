---
title: $textSplitMap
description: Creates a loop over all the indexes of $textSplit
---

This function creates a loop over all the values in $textSplit

## Usage

```php
$textSplitMap[awaitedCommand]
```

### Example

```javascript
bot.command({
name: "loop",
code: `
$textSplitMap[example]
$textSplit[hi/hello/bye/goodbye;/]
`
})
//TIP: To get the textSplit value itself, use $message[1]

bot.awaitedCommand({
name: "example",
code: `
Value => $message[1]
`
})
```

![](<../discord-examples/assets/image (65).png>)

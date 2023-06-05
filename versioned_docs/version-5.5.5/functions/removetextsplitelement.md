---
title: $removeTextSplitElement
description: Removes element from given index
---

This function removes values from $textSplit via the given index

```php
$removeTextSplitElement[index]
```

```javascript
bot.command({
name: "removing",
code: `$removeTextSplitElement[2]
$textSplit[hi/bye/hello;/]`
})
//Removes bye completely from the list of values in $textSplit
```


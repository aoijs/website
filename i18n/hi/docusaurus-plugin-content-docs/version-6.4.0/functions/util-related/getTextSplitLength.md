---
title: '$getTextSplitLength'
description: '$getTextSplitLength will return the amount of split arguments in $textSplit'
id: getTextSplitLength
---

`$getTextSplitLength` will return the amount of split arguments in `$textSplit`.

## प्रोयोग

```php
$getTextSplitLength
```

## उदाहरण

This will return `5` as there are five arguments separated by commas given in `$textSplit`

```javascript
bot.command({
    name: 'getTextSplitLength',
    code: `
  $getTextSplitLength
  $textSplit[Hello, my, name, is, Leref;, ]
  `
});
```

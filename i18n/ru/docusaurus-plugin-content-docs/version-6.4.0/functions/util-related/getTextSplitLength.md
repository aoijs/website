---
title: $getTextSplitLength
description: '$getTextSplitLength возвращает количество аргументов разделения в $textSplit'
id: getTextSplitLength
---

`$getTextSplitLength` возвращает количество разделенных аргументов в `$textSplit`.

## Использование

```php
$getTextSplitLength
```

## Пример(ы)

Это вернёт `5` , так как пять аргументов разделены запятыми в `$textSplit`

```javascript
bot.command({
    name: 'getTextSplitLength',
    code: `
  $getTextSplitLength
  $textSplit[Hello, my, name, is, Leref;, ]
  `
});
```

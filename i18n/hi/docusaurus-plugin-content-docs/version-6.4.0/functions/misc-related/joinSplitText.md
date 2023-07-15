---
title: '$joinSplitText'
description: '$joinSplitText will join all text split elements by a given separator.'
id: joinSplitText
---

`$joinSplitText` will join all text split elements by a given separator.

## प्रोयोग

```php
$joinSplitText[sep?]
```

## पैरामीटर्स

| फील्ड | टाइप    | डिस्क्रिप्शन                                    |    चाहिए     |
| ----- | ------- | ----------------------------------------------- |:------------:|
| sep?  | integer | Separator to separate multiple returned values. | असत्य (नहीं) |

## ट्रू (हा)

This will join all text split elements with a comma:

```javascript
bot.command({
    name: "joinSplitText",
    code: `
    $joinSplitText[, ]
    $textSplit[Hello:Bye:Leref;:]
    `
});
```
---
title: '$findTextSplitIndex'
description: '$findTextSplitIndex will return the index of a text split element after a given query.'
id: findTextSplitIndex
---

`$findTextSplitIndex` will return the index of a text split element after a given query.

## प्रोयोग

```php
$findTextSplitIndex[query]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| query | स्ट्रिंग | Query.       | true  |

## ट्रू (हा)

This will return `3` as the first `Cya` in this `$textSplit` is in the third position:

```javascript
bot.command({
    name: "findTextSplitIndex",
    code: `
  $findTextSplitIndex[Cya]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```
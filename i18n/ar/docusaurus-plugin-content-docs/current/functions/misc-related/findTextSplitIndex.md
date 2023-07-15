---
title: '$findTextSplitIndex'
description: '$findTextSplitIndex will return the index of a text split element after a given query.'
id: findTextSplitIndex
---

`$findTextSplitIndex` will return the index of a text split element after a given query.

## الاستخدام

```php
$findTextSplitIndex[query]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| query | string | Query.       | true  |

## مثال

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
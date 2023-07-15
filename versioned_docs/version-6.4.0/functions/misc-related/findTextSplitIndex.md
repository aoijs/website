---
title: $findTextSplitIndex
description: $findTextSplitIndex will return the index of a text split element after a given query.
id: findTextSplitIndex
---

`$findTextSplitIndex` will return the index of a text split element after a given query.

## Usage

```php
$findTextSplitIndex[query]
```

## Parameters

| Field | Type   | Description | Required |
| ----- | ------ | ----------- | :------: |
| query | string | Query.      |   true   |

## Example(s)

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
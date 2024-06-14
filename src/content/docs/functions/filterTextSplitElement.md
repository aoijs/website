---
title: $filterTextSplitElement
description: $filterTextSplitElement filters elements from $textSplit and returns the elements that meet the criteria.
id: filterTextSplitElement
---

`$filterTextSplitElement` filters elements from $textSplit and returns the elements that meet the criteria.

## Usage

```aoi
$filterTextSplitElement[query;type?;sep?]
```

## Parameters

| Field | Type                                                                                              | Description                                                                                                                               | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| query | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The query that will be used for filtering.                                                                                                |   true   |
| type? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The type of comparison to be performed during the filtering.<br />1. **equal** (default)<br />2. **starts**<br />3. **ends**<br />4. **includes** |   true   |
| sep?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator for the filtered elements. (default `,`)                                                                                        |   true   |

## Example(s)

This will return `HelloWorld` and `HelloDiscord` as they begin with `Hello`:

```js
client.command({
    name: "test",
    code: `$filterTextSplitElement[Hello;starts;,]
  $textSplit[HelloWorld__HowAreYou__HelloDiscord__Bye;__]`
});
```

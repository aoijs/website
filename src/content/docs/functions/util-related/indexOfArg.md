---
title: $indexOfArg
description: $indexOfArg will return the index of the given query.
id: indexOfArg
---

`$indexOfArg` will return the index of the given query.

## Usage

```php
$indexOfArg[string;query]
```

## Parameters

| Field                                                                                             | Type                                                                                              | Description                                     | Required |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text the bot will be checking the index of. |   true   |
| query                                                                                             | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The query the bot will be checking for.         |   true   |

## Example(s)

This will return `3` as `great` is the third argument in the query:

```javascript
client.command({
  name: "indexOfArgs",
  code: `
  $indexOfArgs[aoi.js is great for users who are new to Discord's API!;great]
  `
});
```

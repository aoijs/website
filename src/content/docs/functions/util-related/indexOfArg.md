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

| Field  | Type   | Description                                     | Required |
| ------ | ------ | ----------------------------------------------- | :------: |
| string | string | The text the bot will be checking the index of. |   true   |
| query  | string | The query the bot will be checking for.         |   true   |

## Example(s)

This will return `3` as `great` is the third argument in the query:

```javascript
bot.command({
  name: "indexOfArgs",
  code: `
  $indexOfArgs[aoi.js is great for users who are new to Discord's API!;great]
  `,
});
```

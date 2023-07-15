---
title: '$indexOfArg'
description: '$indexOfArg will return the index of the given query.'
id: indexOfArg
---

`$indexOfArg` will return the index of the given query.

## الاستخدام

```php
$indexOfArg[string;query]
```

## البارامترات

| Field  | النوع  | الديسكبربشين                                    | مطلوب |
| ------ | ------ | ----------------------------------------------- |:-----:|
| string | string | The text the bot will be checking the index of. | true  |
| query  | string | The query the bot will be checking for.         | true  |

## مثال

This will return `3` as `great` is the third argument in the query:

```javascript
bot.command({
    name: 'indexOfArgs',
    code: `
  $indexOfArgs[aoi.js is great for users who are new to Discord's API!;great]
  `
});
```

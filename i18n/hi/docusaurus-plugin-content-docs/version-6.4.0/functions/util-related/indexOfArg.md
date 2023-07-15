---
title: '$indexOfArg'
description: '$indexOfArg will return the index of the given query.'
id: indexOfArg
---

`$indexOfArg` will return the index of the given query.

## प्रोयोग

```php
$indexOfArg[string;query]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                    | चाहिए |
| -------- | -------- | ----------------------------------------------- |:-----:|
| स्ट्रिंग | स्ट्रिंग | The text the bot will be checking the index of. | true  |
| query    | स्ट्रिंग | The query the bot will be checking for.         | true  |

## ट्रू (हा)

This will return `3` as `great` is the third argument in the query:

```javascript
bot.command({
    name: 'indexOfArgs',
    code: `
  $indexOfArgs[aoi.js is great for users who are new to Discord's API!;great]
  `
});
```

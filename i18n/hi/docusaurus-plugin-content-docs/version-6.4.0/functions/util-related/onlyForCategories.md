---
title: '$onlyForCategories'
description: '$onlyForCategories will check if the command was executed in the category of the execution channel and return a error message if not.'
id: onlyForCategories
---

`$onlyForCategories` will check if the command was executed in the category of the execution channel and return a error message if not.

## प्रोयोग

```php
$onlyForCategories[...categoryIds;error]
```

## पैरामीटर्स

| फील्ड          | टाइप            | डिस्क्रिप्शन                                                                       | चाहिए |
| -------------- | --------------- | ---------------------------------------------------------------------------------- |:-----:|
| ...categoryIds | string, integer | Categories you want to limit the command to.                                       | true  |
| error          | स्ट्रिंग        | Error to return when the command was not executed in any of the listed categories. | true  |

## ट्रू (हा)

This will limit the command only to given channel categories:

```javascript
bot.command({
    name: "onlyForCategories",
    code: `
    Ok.
    $onlyForCategories[categoryID;categoryID;You can't use that command here!]
    `
});
```
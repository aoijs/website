---
title: $onlyForCategories
description: $onlyForCategories will check if the command was executed in the category of the execution channel and return a error message if not.
id: onlyForCategories
---

`$onlyForCategories` will check if the command was executed in the category of the execution channel and return a error
message if not.

## Usage

```php
$onlyForCategories[...categoryIds;error]
```

## Parameters

| Field          | Type            | Description                                                                        | Required |
| -------------- | --------------- | ---------------------------------------------------------------------------------- | :------: |
| ...categoryIds | string, integer | Categories you want to limit the command to.                                       |   true   |
| error          | string          | Error to return when the command was not executed in any of the listed categories. |   true   |

## Example(s)

This will limit the command only to given channel categories:

```javascript
bot.command({
  name: "onlyForCategories",
  code: `
    Ok.
    $onlyForCategories[categoryID;categoryID;You can't use that command here!]
    `,
});
```

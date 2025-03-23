---
title: $onlyForCategories
description: $onlyForCategories will check if the command was executed in the category of the execution channel and return an error message if not.
id: onlyForCategories
---

`$onlyForCategories` will check if the command was executed in the category of the execution channel and return an error
message if not.

## Usage

```aoi
$onlyForCategories[...categoryIDs;error]
```

## Parameters

| Field          | Type                                                                                                                                                                                                 | Description                                                                        | Required |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | :------: |
| ...categoryIDs | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | Categories you want to limit the command to.                                       |   true   |
| error          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Error to return when the command was not executed in any of the listed categories. |   true   |

## Example(s)

This will limit the command only to given channel categories:

```javascript
client.command({
    name: "onlyForCategories",
    code: `
    Ok.
    $onlyForCategories[categoryID;categoryID;You can't use that command here!]
    `
});
```

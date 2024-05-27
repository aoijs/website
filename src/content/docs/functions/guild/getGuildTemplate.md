---
title: $getGuildTemplate
description: $getGuildTemplate will return data about a given guild template.
id: getGuildTemplate
---

`$getGuildTemplate` will return data about a given guild template.

## Usage

```aoi
$getGuildTemplate[template;property]
```

## Parameters

| Field    | Type                                                                                              | Description                                           | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :------: |
| template | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The Id of the template you want the data returned of. |   true   |
| property | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The property to be returned.                          |   true   |

## Example(s)

This will return the data about a given guild template:

```javascript
client.command({
    name: "getGuildTemplate",
    code: `
  $getGuildTemplate[guild-template-code;name]
  `
});
```

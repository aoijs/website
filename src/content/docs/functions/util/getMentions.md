---
title: $getMentions
description: $getMentions will return all mentions of a specific type.
id: getMentions
---

`$getMentions` will return all mentions of a specific type.

## Usage

```aoi
$getMentions[type?;separator?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                 | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | :------: |
| type      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The type of mention. <br /> **1.** role <br /> **2.** users |  false   |
| separator | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator of the mentions, default = ", "               |  false   |

## Example(s)

This will return all user mentions:

```javascript
client.command({
    name: "getMentions",
    code: `
$getMentions[users;, ]
`
});
```

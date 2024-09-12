---
title: $editAppEmoji
description: $editAppEmoji will modify a specific application emoji.
id: editAppEmoji
---

`$editAppEmoji` will modify a specific application emoji.

## Usage

```aoi
$editAppEmoji[name;newName;returnEmoji?]
```

## Parameters

| Field          | Type                                                                                                | Description                 | Required |
| -------------- | --------------------------------------------------------------------------------------------------- | --------------------------- | :------: |
| name           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The name of the emoji.      |   true   |
| newName        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The new name of the emoji.  |   true   |
| returnEmoji?   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Reuturns the emoji.         |   false  |

## Example(s)

This will modify the given application emoji name from "leref" to "fafa":

```js
client.command({
    name: "editAppEmoji",
    code: `
$editAppEmoji[leref;fafa;false]
  `
});
```


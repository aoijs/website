---
title: $deleteAppEmoji
description: $deleteAppEmoji will delete a specific application emoji.
id: deleteAppEmoji
---

`$deleteAppEmoji` will delete a specific application emoji.

## Usage

```aoi
$deleteAppEmoji[name]
```

## Parameters

| Field        | Type                                                                                                | Description              | Required |
| ------------ | --------------------------------------------------------------------------------------------------- | ------------------------ | :------: |
| name         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The name of the emoji.   |   true   |



## Example(s)

This will delete the given application emoji named "leref":

```js
client.command({
    name: "addAppEmoji",
    code: `
  $deleteAppEmoji[leref]
  `
});
```


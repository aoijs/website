---
title: $createAppEmoji
description: $createAppEmoji will create an application emoji.
id: createAppEmoji
---

`$createAppEmoji` will create an application emoji.

## Usage

```aoi
$createAppEmoji[name;url;returnEmoji?]
```

## Parameters

| Field        | Type                                                                                                | Description              | Required |
| ------------ | --------------------------------------------------------------------------------------------------- | ------------------------ | :------: |
| name         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The name of the emoji.   |   true   |
| url          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The url to set as emoji. |   true   |
| returnEmoji? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Returns the emoji.       |   false  |


## Example(s)

This will create an application emoji:

```js
client.command({
    name: "createAppEmoji",
    code: `
  $createAppEmoji[leref;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;false]
  `
});
```


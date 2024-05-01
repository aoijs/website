---
title: $createSticker
description: $createSticker will create a sticker.
id: createSticker
---

`$createSticker` will create a sticker.

## Usage

```php
$createSticker[guildID;URL;name;returnSticker?;tags;description;reason]
```

## Parameters

| Field          | Type                                                                                                | Description                                                                             | Required |
| -------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | :------: |
| guildID        | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Guild ID of where the sticker will be created in.                                       |   true   |
| URL            | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Image URL (**png only**).                                                               |   true   |
| name           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The sticker name.                                                                       |   true   |
| returnSticker? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Return the sticker after its creation. <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| tags?          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Sticker tags.                                                                           |  false   |
| description?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The description of the sticker.                                                         |  false   |
| reason?        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Reason that will be displayed in the guild's audit logs.                                |  false   |

## Example(s)

This will create a sticker called `Imagine`:

```javascript
client.command({
    name: "createSticker",
    code: `
  $createSticker[$guildID;https://cdn.discordapp.com/attachments/1061712111052521493/1066397675278323734/692445926480150611.png;Imagine;true;money;Random sticker;Testing.]
  `
});
```

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

| Field          | Type    | Description                                                                             | Required |
| -------------- | ------- | --------------------------------------------------------------------------------------- | :------: |
| guildID        | integer | Guild ID of where the sticker will be created in.                                       |   true   |
| URL            | string  | Image URL (**png only**).                                                               |   true   |
| name           | string  | The sticker name.                                                                       |   true   |
| returnSticker? | boolean | Return the sticker after its creation. <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| tags?          | string  | Sticker tags.                                                                           |  false   |
| description?   | string  | The description of the sticker.                                                         |  false   |
| reason?        | string  | Reason that will be displayed in the guild's audit logs.                                |  false   |

## Example(s)

This will create a sticker called `Imagine`:

```javascript
bot.command({
    name: 'createSticker',
    code: `
  $createSticker[$guildID;https://cdn.discordapp.com/attachments/1061712111052521493/1066397675278323734/692445926480150611.png;Imagine;true;money;Random sticker;Testing.]
  `
});
```

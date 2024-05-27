---
title: $image
description: $image will add an image to an embed.
id: image
---

`$image` will add an image to an embed.

## Usage

```aoi
$image[index?;URL]
```

## Parameters

| Field  | Type                                                                                              | Description                     | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------------------- | :------: |
| index? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Embed index                     |  false   |
| URL    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Embed Image URL. (bottom image) |   true   |

## Example(s)

This will create an embed with an image, title and footer:

```javascript
client.command({
    name: "embed",
    code: `
  $title[Hello!]
  $image[$userAvatar]
  $footer[Hello again!;$userAvatar]
  `
});
```

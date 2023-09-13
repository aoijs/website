---
title: $thumbnail
description: $thumbnail add a thumbnail to an embed (upper right corner image).
id: thumbnail
---

`$thumbnail` add a thumbnail to an embed (upper right corner image).

## Usage

```php
$thumbnail[index?;URL]
```

## Parameters

| Field  | Type   | Description           | Required |
| ------ | ------ | --------------------- | :------: |
| index? | number | Embed position/index. |  false   |
| URL    | string | Thumbnail Image URL.  |   true   |

## Example(s)

This will create an embed with your user avatar in it:

```javascript
bot.command({
  name: "thumbnail",
  code: `
   $thumbnail[$userAvatar[$authorID]]
   $description[Hello, that's your Avatar!]`,
});
```

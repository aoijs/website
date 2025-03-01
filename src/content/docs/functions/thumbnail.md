---
title: $thumbnail
description: $thumbnail adds a thumbnail to an embed (upper right corner image).
id: thumbnail
---

`$thumbnail` adds a thumbnail to an embed (upper right corner image).

## Usage

```aoi
$thumbnail[index?;URL]
```

## Parameters

| Field  | Type                                                                                              | Description           | Required |
| ------ | ------------------------------------------------------------------------------------------------- | --------------------- | :------: |
| index? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Embed position/index. |  false   |
| URL    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Thumbnail Image URL.  |   true   |

## Example(s)

Here’s an example of how to create an embed that includes your avatar:

```javascript
client.command({  
    name: "thumbnail",  
    code: `  
   $thumbnail[$userAvatar[$authorID]]  
   $description[Hello! This is your avatar.]`  
});
```

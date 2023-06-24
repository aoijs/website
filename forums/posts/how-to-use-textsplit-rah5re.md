---
title: "How to use textSplit"
description: "i tryed to show the best example :)
( is a basic example to use textSplit... )"
authors:
  name: "@Artz_"
  title: Member
  url: https://discord.com/users/1079517122822152272
  image_url: https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png
tags: ["aoi.js","v6"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

## Content

```js
$splitText[2] // returns Artz_ ( b => Artz_ )
$editTextSplitElement[2;Artz_]
$splitText[$random[1;$getTextSplitLength]] // returns random letter inserted in textSplit
$joinSplitText[ - ] // returns b - c - d
$removeSplitTextElement[1]
$joinSplitText[ - ] // returns a - b - c - d
$splitText[1] // returns a
$textSplit[a|b|c|d;|]
```
---
title: "Random Car Image"
description: "Very simple code"
authors:
  name: "@jollyjolli"
  title: Member - 166181471369953280
  userid: "166181471369953280"
  url: https://discord.com/users/166181471369953280
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/166181471369953280.png
tags: ["aoi.js","v6"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports = [{
name: "random car",
aliases: ["rc"],
code: `
$image[1;$getObjectProperty[image_link]]
$title[1;$getObjectProperty[image_title]]
$onlyIf[$getObjectProperty[success]==true;Api error.]
$createObject[$httpRequest[https://hunterapi.tk/api/random-car]`
}]
```
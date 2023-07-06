---
title: "Random Country"
description: "A code for get information about a random code."
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
name: "Random Country",
aliases: ["rc"],
code: `
$title[1;$getObjectProperty[countries[$random[0;250]].name_en]]
$addField[1;TLD;$getObjectProperty[countries[$random[0;250]].tld];true]
$addField[1;ISO Code (v2);$getObjectProperty[countries[$random[0;250]].code_3];true]
$addField[1;ISO Code (v1);$getObjectProperty[countries[$random[0;250]].code_2];true]
$addField[1;Capital;$getObjectProperty[countries[$random[0;250]].capital_es];true]
$addField[1;Dial Code;$getObjectProperty[countries[$random[0;250]].dial_code];true]
$addField[1;Continent;$getObjectProperty[countries[$random[0;250]].continent_en];true] 
$image[1;https://flagcdn.com/w2560/$tolowercase[$getObjectProperty[countries[$random[0;250]].code_2]].jpg]
$footer[1;Code By $getObjectProperty[by]]
$color[$getUserVar[PFcolor]]
$createObject[$jsonRequest[https://www.jsonkeeper.com/b/L23E]]`
}];
```

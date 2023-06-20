---
title: "Roblox group info command"
description: "Displays info about a roblox group"
authors: supreme
tags: ["v6", "aoi.js"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports = {
    name: "groupinfo",
    code: `
    $title[1;Success!] 
    $description[> Group ID: $getobjectproperty[id]
    > **Group Name:** $getobjectproperty[name]
    > **Group Description:** $getobjectproperty[description] $if[$getobjectproperty[description]==;undefined;]
    > **Group OwnerId:** $getobjectproperty[owner.username]
    > **Group Latest Shout:** $getobjectproperty[shout.body] $if[$getobjectproperty[shout.body]==;undefined;]
]
    $color[1;#C3A78E]
    $footer[1;bob]
    $createObject[$jsonRequest[https://groups.roblox.com/v1/groups/$message[1]]]
    $argscheck[1;Group id?]
    `
}
```
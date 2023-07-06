---
title: "HowGamer command"
description: "Checks how gamer you're for no reason, It's just for fun so."
authors:
  name: "@dodogames"
  title: Member - 632607624742961153
  userid: "632607624742961153"
  url: https://discord.com/users/632607624742961153
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png
tags: ["v6","aoi.js"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports = {
name: "howgamer",
code: `$title[how Gamer machine]
$description[$username[$mentioned[1;true]] is $random[1;100]% Gamer]
$color[Random]
$onlyIf[$mentioned[1;true]!=$authorID;{newEmbed:{title:how Gamer machine}{description:you're $random[1;100]% Gamer}{color:Random}}]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
`
}
```

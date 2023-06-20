---
title: "Botinfo command"
description: "simple botinfo command"
authors:
  name: "@arkwell"
  title: Member
  url: https://discord.com/users/405070001356275712
  image_url: https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png
tags: ["v6","aoi.js"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports = [{
    name: "botinfo",
    code: `
$addField[Uptime;$uptime[full]]
$addField[Ping;$pingms]
$addField[Channels;$allChannelsCount]
$addField[Users;$allMembersCount]
$addField[Servers;$guildCount]
$title[Bot Information]
  `
}]; 
```
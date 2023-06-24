---
title: "Botinfo command"
description: "simple botinfo command"
authors:
  name: "@arkwell"
  title: Member
  userid: "405070001356275712"
  url: https://discord.com/users/405070001356275712
  image_url: https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif
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
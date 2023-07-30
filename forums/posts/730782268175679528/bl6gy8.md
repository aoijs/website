---
title: "Simple Set Nickname Command"
description: "this is just a simple moderations set nickname command"
authors:
  name: "@mingweiop"
  title: Member - 730782268175679528
  userid: "730782268175679528"
  url: https://discord.com/users/730782268175679528
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/730782268175679528.png
tags: ["aoi.js","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports = [{
name: "setnick",
aliases: ["setnickname"],
code: `$suppressErrors[Error]

$ifAwaited[$mentioned[1]==$ownerID;{execute:setnicknameowner};{execute:setnicknameuser}]
$onlyIf[$userHighestRole[$clientID;$guildID]>=$userHighestRole[$mentioned[1];$guildID];{newEmbed: {title:Set Nickname Command}{description:I can't change someone's nickname when they have higher role postion than me!}{color:Red}}]
$onlyIf[$userHighestRole[$authorID;$guildID]>=$userHighestRole[$mentioned[1];$guildID];{newEmbed: {title:Set Nickname Command}{description:You can't change someone's nickname when they have higher role postion than you!}{color:Red}}]
$onlyIf[$memberExists[$mentioned[1];$guildID]==true;{newEmbed: {title:Set Nickname Command}{descripion:I can't find the user you mentioned, make sure they are on the server!}{color:Red}}]
$onlyIf[$isMentioned[$mentioned[1]]==true;{newEmbed: {title:Set Nickname Command}{description:This Command Required Mention A User That Is On The Server!}{color:Red}}]
$argsCheck[>0;{newEmbed: {title:Set Nickname Command}{description:<:crossmark:1134832760289234974> Invalid Arguments: \`\`$getGuildVar[prefix]setnickname <@user> Kazuki\`\`}{color:Red}}]
$onlyClientPerms[changenickname;{newEmbed: {title:Set Nickname Command}{description:<:crossmark:1134832760289234974> Bot required \`\`Change Nickname\`\` permission to take action!}{color:Red}}]
$onlyPerms[manageguild;{newEmbed: {title:Set Nickname Command}{description:<:crossmark:1134832760289234974> This commands required \`\`Manage Server\`\` permission to take action!}{color:Red}}]`
},{
    name: "setnicknameuser",
    type: "awaited",
    code: `$title[1;Set Nickname Command]
$description[1;Successful changed **<@$mentioned[1;true]>** nickname to **$noMentionMessage**]
$color[1;Green]
$setUserNickname[$mentioned[1;true];$noMentionMessage]`
},{
    name: "setnicknameowner",
    type: "awaited",
    code: `$title[1;Set Nickname Command]
$description[1;I'm Unable To Change The Guild Owner Nicknames.]
$color[1;Red]`
}]
```
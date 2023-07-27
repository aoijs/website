---
title: "Slash Purge Command"
description: "This wiki is about a purge command, an efficient tool enabling users to swiftly delete multiple messages with a single command, rather than tediously removing them one by one. The purge command grants users the ability to specify the exact number of messages they wish to erase, streamlining the process of message management and facilitating a cleaner and more organized communication environment. "
authors:
  name: "@nosey.exe"
  title: Member - 909238977721139200
  userid: "909238977721139200"
  url: https://discord.com/users/909238977721139200
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/909238977721139200.png
tags: ["aoi.js","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

This is a slash command so you will need to make a slash. Heres an example:
```js
bot.command({
    name: "slash",
    code: `
$createApplicationCommand[global;purge;Purge a certain ammount of messages!;true;slash;[{
"name": "amount",
"description": "the amount of messages to be purged",
"type": 4,
"required": true
}, {
"name": "channel",
"description": "the channel where to delete the messages",
"type": 7,
"required": false
}]]
$title[**The slash command has been created!**]
$color[Green]
  $onlyIf[$authorid==$clientOwnerIDs;{newEmbed: {title: #COLON#warning#COLON# Error has been found!}{description:It seems that only the bot owner **$userTag[$clientOwnerIds] can run this command.**}{color:Red}}]`
});
```
This you would add in your main file or make in your commands handler. Whatever is better for you.
```js
bot.interactionCommand({
  name: "purge",
  $if: "old",
  prototype: "slash",
  code: `
  $if[$slashoption[channel]==]
  $clear[$slashOption[amount];everyone;false;$channelid]
  $interactionReply[;{newEmbed: {title:**Success**}{description:\`$slashOption[amount]\` messages have been deleted!\nChannel: <#$channelid>}{footer:Excecuted by $usertag[$authorid]}{color:Random}};;;everyone;true]
  $else
$clear[$slashOption[amount];everyone;false;$slashOption[channel]]
  $interactionReply[;{newEmbed: {title:**Success**}{description:\`$slashOption[amount]\` messages have been deleted!\nChannel: <#$slashOption[channel]>}{footer:Excecuted by $usertag[$authorid]}{color:Random}};;;everyone;true]
  $endif 
  $onlyIf[$channelType[$get[channel]]==text;{newEmbed: {title:Error...}{description:The following channel <#$get[channel]> does not seem to be a text channel!}{color:Red}}{extraOptions: {interaction}}]
$let[channel;$findChannel[$slashOption[channel];true]]
$onlyif[$slashOption[amount]<151;{newEmbed: {title:Error...}{description:You need to pick number from 1-150}{color:Red}}{extraOptions: {interaction}}]
$onlyif[$slashOption[amount]>0;{newEmbed: {title:Error...}{description:You need to pick number from 1-150}{color:Red}}{extraOptions: {interaction}}]
$onlyIf[$hasPerms[$guildId;$authorId;managemessages]!=false;{newEmbed: {title: Missing Permissions...}{description:Seems like you are missing \`MANAGE_MESSAGES\` permissions! You need these to be able to request message deletion!}{color:Red}}{extraOptions: {interaction}}]
$onlyIf[$hasPerms[$guildId;$clientID;managemessages]!=false;{newEmbed: {title: Missing Permissions...}{description:Seems like i'am missing \`MANAGE_MESSAGES\` permissions! I need these to be able to delete messages!}{color:Red}}{extraOptions: {interaction}}]
$suppressErrors[{newEmbed: {description: I ran into an error! This can  have been cause by a few things! \`\`\`- Channel not text\n- Missing Perms\`\`\`}{color:Red}{title:#COLON#warning#COLON# Error #COLON#warning#COLON#}}{extraOptions: {interaction}}]
```

Now once you have used the command to create the slash its really simple. All you do is /purge and do the requirements. The bot will delete the amount of messages requested in the channel the command was excecuted in **if** no channel is provided.

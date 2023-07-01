---
title: "Kick command"
description: "The Kick command is triggered through a slash command interaction. Nothing special, it's just a kick command."
authors:
  name: "@kazu666"
  title: Member - 689364013297041409
  userid: "689364013297041409"
  url: https://discord.com/users/689364013297041409
  image_url: https://cdn.discordapp.com/avatars/689364013297041409/fc4e334a1f8194949082467c960ed308.png
tags: ["v6","aoi.js"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

# Steps
**1.** If you have an `eval` command use this:

```js
!eval $createApplicationCommand[global;kick;Kicks a user from the server.;true;slash;[{
"name": "user",
"description": "The user to be kicked. Mention the user by typing @ and selecting them from the list.",
"required": true,
"type": 6
},{
"name": "reason",
"description": "The reason for kicking the user (optional). If provided, it will be displayed in the server log.",
"required": false,
"type": 3
}]
]
```

And **if you do not have** an `eval` command use this:

```js
module.exports = [{
  name: "execute",
  code: `
$createApplicationCommand[global;kick;Kicks a user from the server.;true;slash;[{
"name": "user",
"description": "The user to be kicked. Mention the user by typing @ and selecting them from the list.",
"required": true,
"type": 6
},{
"name": "reason",
"description": "The reason for kicking the user (optional). If provided, it will be displayed in the server log.",
"required": false,
"type": 3
}]
]
  `
}]
```


**2.** Create a new file in your command handler (name it however you want), then paste this code into your file:

```js
module.exports = [{
  name: "kick",
  prototype: "slash",
  type: "interaction",
  $if: "old",
  code: `
  $kick[$guildID;$slashOption[user];$slashOption[reason]]
  $suppressErrors[{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:{author:Error:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:It seems that there is a problem while executing this command.}{color:#000000}}]
  
  $interactionReply[;{newEmbed:
  {author:Moderation:https#COLON#//static.thenounproject.com/png/3120613-200.png}
  {authorURL:https#COLON#//discord.com/channels/$guildID/$getGuildVar[modCha]/$get[cha]}
  {description:A user has been **kicked** out of the server.}
  {field:Name:[$username[$slashOption[user]]](https#COLON#//discordlookup.mesavirep.xyz/v1/user/$slashOption[user])}
  {field:Reason:$get[reason]}
  {footer:$username:$userAvatar}
  {thumbnail:$userAvatar[$slashOption[user]]}
  {timestamp}
  {color:#000000}
  }
  ;;;everyone;true]


  $if[$getGuildVar[modLog]==true]
  $let[cha;$channelSendMessage[$getGuildVar[modCha];{newEmbed:
  {author:Moderation:https#COLON#//static.thenounproject.com/png/3120613-200.png}
  {description:A user has been **kicked** out of the server.}
  {field:Name:[$username[$slashOption[user]]](https#COLON#//discordlookup.mesavirep.xyz/v1/user/$slashOption[user])}
  {field:Reason:$get[reason]}
  {footer:$username:$userAvatar}
  {thumbnail:$userAvatar[$slashOption[user]]}
  {timestamp}
  {color:#000000}
  }
  ;true]]
  $onlyIf[$getGuildVar[modCha]!=;]
  $endIf

  $if[$slashOption[reason]==]
  $let[reason;None]
  $else
  $let[reason;$slashOption[reason]]
  $endIf

  $onlyIf[$checkCondition[$rolePosition[$highestRole[$clientID]]==$rolePosition[$highestRole[$slashOption[user]]]]!=false;{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:I cannot kick someone with the same role as mine.}{color:#000000}}]
  
$onlyIf[$checkCondition[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$slashOption[user]]]]!=false;{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:I cannot kick someone with a higher role than mine.}{color:#000000}}]

$onlyIf[$checkCondition[$isBot[$slashOption[user]]==true]!=true;{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:I am not allowed to kick a bot.}{color:#000000}}]

$onlyIf[$slashOption[user]!=$clientID;{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:I cannot kick myself.}{color:#000000}}]

$onlyIf[$slashOption[user]!=$authorID;{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:You cannot kick yourself.}{color:#000000}}]
  $onlyIf[$checkCondition[$hasAnyRole[$guildID;$authorID;$findRole[Crossfire]]==true||$hasPerms[$guildID;$authorID;kickmembers]==true]!=false;{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:{author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}{description:You do not have enough permission to perform this command.}{color:#000000}}]
  `
}]
```

**3.** Before saving, make sure you have these variables:

```js
   modLog: false,
   modCha: "" // If this is empty, the logs will not be sent anywhere even if modLog is enabled, so make sure to fill this out.
```

What do these variables do?

> ***modLog*** - This variable enables or disables the moderation logs.
> 
> ***modCha*** - If modLog is set to true, the moderation logs will be sent to the channel specified in this variable.

# Note
Make sure that you have the required `intents` and `events` to ensure the proper function of this command.

My intents and events:
```js
intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans", "GuildWebhooks", "GuildPresences", "DirectMessages", "GuildMembers"],
events: ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onInteractionCreate", "onGuildJoin", "onJoin"]
```
.

.

You could replace (Crossire) `$findRole[Crossfire]` to whatever role you want to give access to the command, you could add more roles if you want. Like this `$hasAnyRole[$guildID;$authorID;$findRole[Crossfire];$findRole[Moderator]]`.
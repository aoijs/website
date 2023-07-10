---
title: "Clear command"
description: "The clear command allows the user (with permission) to delete fewer than 100 messages. It also provides two additional optional options: filter and channel."
authors:
  name: "@kazu666"
  title: Member - 689364013297041409
  userid: "689364013297041409"
  url: https://discord.com/users/689364013297041409
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/689364013297041409.png
tags: ["aoi.js","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

**1.** If you have an `eval` command use this:
```js
!eval $createApplicationCommand[global;clear;Clear messages;true;slash;[
  {
    "name": "amount",
    "description": "Amount of messages to delete (up to 100).",
    "required": true,
    "type": 10
  },
  {
    "name": "filter",
    "description": "Filter of messages to delete (optional). Filter options: everyone (default), bot, userID",
    "required": false,
    "type": 6
  },
  {
    "name": "channel",
    "description": "Channel where the messages should be deleted (optional).",
    "required": false,
    "type": 7
  }
]]
```
And **if you do not have** an `eval` command use this:
```js
module.exports = [{
  name: "execute",
  code: `
$createApplicationCommand[global;clear;Clear messages;true;slash;[
  {
    "name": "amount",
    "description": "Amount of messages to delete (up to 100).",
    "required": true,
    "type": 10
  },
  {
    "name": "filter",
    "description": "Filter of messages to delete (optional). Filter options: everyone (default), bot, userID",
    "required": false,
    "type": 6
  },
  {
    "name": "channel",
    "description": "Channel where the messages should be deleted (optional).",
    "required": false,
    "type": 7
  }
]]
  `
}]
```

**2.** Create a new file in your command handler (name it however you want), then paste this code into your file:

```js
module.exports = [{
  name: "clear",
  prototype: "slash",
  type: "interaction",
  $if: "old",
  code: `
  $interactionFollowUp[You have deleted **$get[cAmount]** messages.]
  $let[cAmount;$clear[$get[clearAmount];$get[clearFilt];true;$get[clearChan]]]

  $if[$slashOption[channel]==]
    $let[clearChan;$channelID]
    $else
    $let[clearChan;$slashOption[channel]]
    $endIf

    $if[$slashOption[filter]==]
    $let[clearFilt;everyone]
    $else
    $let[clearFilt;$slashOption[filter]]
    $endIf

    $if[$slashOption[amount]>100]
    $let[clearAmount;100]
    $else
    $let[clearAmount;$slashOption[amount]]
    $endIf

    
    $interactionDefer[true]
    $onlyIf[$checkCondition[$channelType[$replaceText[$replaceText[$checkCondition[$slashOption[channel]==];true;$channelID];false;$slashOption[channel]]]==text]!=false;{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:
  {author: Invalid Channel Type: https#COLON#//static.thenounproject.com/png/3688947-200.png}
  {description: The specified channel is invalid or not a text channel. Please provide a valid text channel.}
  {color: #000000}
}]

$onlyIf[$checkCondition[$hasAnyRole[$guildID;$authorID;$findRole[Crossfire]]==true||$hasPerms[$guildID;$authorID;managemessages]==true]!=false;{options:{ephemeral: true}}
{extraOptions:{interaction: true}}{newEmbed:
  {author:Permission Denied:https#COLON#//static.thenounproject.com/png/3688947-200.png}
  {description:You do not have enough permission to perform this command.}
  {color:#000000}
}]
`
}]
```

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

.

.

I did not add any logs for this one because I am lazy... So yeah. Just figure out how to add a log in the previous command. [**Kick Command**](https://aoi.js.org/wikis/posts/689364013297041409/3rabq)
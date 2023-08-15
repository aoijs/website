---
title: 'Moderation commands Part 2'
description: 'This is the second part of my moderation commands. This includes, unban and untimeout commands.'
authors:
  name: '@nanotechpikachu'
  title: Member - 949588732498018324
  userid: '949588732498018324'
  url: https://discord.com/users/949588732498018324
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/949588732498018324.png
tags: ["aoi.js","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---
    

## Introduction
Hi. This is the second part of my wiki which will cover the rest of my moderation commands namely **unban and remove - timeout**. So, let's get started.

## Dependencies
I have the following packages installed
```
npm i aoi.js
npm i @akarui/aoi.parser
```
Both of them are absolutely necessary.

## Disclaimer
I use a custom function to remove the timeout. The custom function is made by me and the link to it is [Wiki](https://aoi.js.org/wikis/posts/949588732498018324/ka92zr) I will also add the normal way along with it if you don't wanna use custom functions.

## Code
Without further ado, let's get started with the code

### Remove Timeout Command
```js
module.exports = [{
    name: "remove-timeout",
    aliases: ["removetimeout", "untimeout", "untt"],
    code: `
$removeTimeout[$guildID;$findMember[$message[1];false];$replaceText[$replaceText[$checkCondition[$message[1]==];true;No reason provided];false;$messageSlice[1]]]
$sendMessage[<@$findMember[$message[1];false]>'s timeout has been **removed**. Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]{newEmbed:{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];false]]];Uh oh... The user has higher role than me.{extraOptions:{delete:5s}}]
$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];false]]];Uh oh...The user has higher role than me.{extraOptions:{delete:5s}}]
$onlyPerms[moderatemembers;You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]
$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;Uh oh... I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]
$onlyIf[$memberExists[$findMember[$message[1];false]]==true;The user is not in server.{extraOptions:{delete:5s}}]
$onlyIf[$findMember[$message[1];false]!=$authorID;Do not try to do awkward things like untimeouting yourselves.{extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`remove-timeout [mention/user id] (reason)\`{extraOptions:{delete:5s}}]
$onlyIf[$isTimeout[$guildID;$findMember[$message[1];false]]==true;{newEmbed:{description: **Process cancelled!**\n\n**Reason:** The user isn't in the timeout list.}{timestamp}{footer:Moderator#COLON# $username:$userAvatar[$authorID]}}]
`
}]
```
**Note:** Instead of `$removeTimeout` you can use the regular `$timeoutMember[$guildID;authorID;0;false;reason?]` to untimeout people. The "0" coverts it into remove timeout / untimeout command.
**Syntax**: `remove-timeout [mention/user id] (reason)`


### Unban command
```js
module.exports = [{
    name: "unban",
    aliases: ["UNBAN", "Unban"],
    code: `
    $unban[$guildID;$findUser[$message[1];false];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]]
    $sendMessage[<@$findUser[$message[1];false]> has been **unbanned.** Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]{newEmbed:{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}]

    $onlyIf[$isBanned[$guildID;$findMember[$message[1];false;$guildID]]==true;{newEmbed:{description:Process cancelled.\n**Reason:** User not on the banlist. Please cross check the ID.}{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}]
    $onlyPerms[banmembers;Uh oh... You do not have \`BAN_MEMBERS\` permission.{extraOptions:{delete:5s}}]
    $onlyIf[$hasPerms[$guildID;$clientID;banmembers]==true;I do not have \`BAN_MEMBERS\` permission.{extraOptions:{delete:5s}}]
    $onlyIf[$findMember[$message[1];false]!=$authorID;Do not try to do awkward things like unbanning yourself.{extraOptions:{delete:5s}}]
    $onlyIf[$message[1]!=;The syntax is \`unban [user id] (reason)\`.{extraOptions:{delete:5s}}]
    `
}]
```

**Syntax**: `unban [user id] (reason)`

That's the codes!

## Credits
I will extend my thanks to
- aho_emi - Who helped me in the custom function.
- Fafa - Who helped me with timeout remove function (literal one).
- SrPandi - Who helped me with the "reason" part.
- Last but not the least, the wonderful team of Aoi.

## Contact me
You can contact me here or in discord if you have any queries or concern.
**Discord ID:** @nanotechpikachu

## Sneak peak
I am working on warn command which I will do the wiki once I make it. :)

## References
- [My 1st part of moderation commands](https://aoi.js.org/wikis/posts/949588732498018324/yworwb)
- Aoi docs
- [Custom function of remove timeout](https://aoi.js.org/wikis/posts/949588732498018324/ka92zr)

Thanks to all!
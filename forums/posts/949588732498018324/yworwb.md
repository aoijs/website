---
    title: 'Moderation commads'
    description: 'This wiki includes the most common used moderation commands that is, kick, ban, timeout.'
    authors:
      name: '@nanotechpikachu'
      title: Member - 949588732498018324
      userid: '949588732498018324'
      url: https://discord.com/users/949588732498018324
      image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/949588732498018324.png
    tags: ["aoi.js"]
    hide_table_of_contents: true
    enableComments: true
    pagination_prev: null
    pagination_next: null
    ---
    
    Hi to all the viewers. I am back with one of the most commonly used command's wikis. So the commands are:
- Ban
- Kick
- Timeout

This wiki covers the codes of these commands. So, lets get started!

## Installations needed
`npm i aoi.js`

`npm i @akarui/aoi.parser`

## Basic Info
I will also add my versions of packages so that you won't experience problems cuz of old packages and if any new version comes after mine.
```js
@akarui/aoi.parser - v1.0.1
aoi.js - v6.4.0
NodeJS - v18.17.0
```
Also, it would be better if you have at least basic understanding of aoi before using this command so that you can correct any errors.

## Codes
So, lemme share the codes along with syntax for each
### Kick command
```js
module.exports = [{
    name: "kick",
    aliases: ["KICK", "Kick"],
    code: `
  $kick[$guildID;$findMember[$message[1];false];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided.];false;$messageSlice[1]]]
  $sendMessage[<@$findMember[$message[1];false]> has been **kicked.** Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]{newEmbed:{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}

  $onlyPerms[kickmembers;{newEmbed{description:You do not have \`KICK_MEMBERS\` permission.}}{extraOptions:{delete:5s}}]

  $onlyIf[$hasPerms[$guildID;$clientID;kickmembers]==true;Uh..oh... I do not have \`KICK_MEMBERS\` permission.{extraOptions:{delete:5s}}]

  $onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh... The user has higher role than me.{extraOptions:{delete:5s}}]

  $onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];You can't kick the person that has higher role position than you.{extraOptions:{delete:5s}}]
  $onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like kicking yourself.{extraOptions:{delete:5s}}]
  $onlyIf[$message[1]!=;The syntax is \`kick [mention/user id] (reason)\`]
`
}];
```
**Syntax:** `kick [mention/user id] (reason)`

I am using command handler so, plz note it.

### Timeout command
```js
module.exports = [{
    name: "timeout",
    aliases: ["tt", "tiout"],
    code: `
$sendMessage[<@$findMember[$message[1];false]> has been **timeouted.** Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;No reason provided];false;$messageSlice[2]]{newEmbed:{footer:Moderator#COLON# $username | Ends at:$userAvatar[$authorID]}{timestamp:$get[end]}}]
$let[end;$timeoutMember[$guildID;$findMember[$message[1];false];$message[2];true;$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;No reason provided];false;$messageSlice[2]]]] 

$onlyPerms[moderatemembers;Uh oh... You do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$hasPerms[$guildID;$clientID;moderatemembers]==true;I do not have \`MODERATE_MEMBERS\` permission.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...The user's role is higher than me.{extraOptions:{delete:5s}}]

$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh...You cannot timeout a person who has higher than you.{extraOptions:{delete:5s}}]

$onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like timeouting yourself. {extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]
$onlyIf[$message[2]!=;The syntax is \`timeout [mention/user id] [time] (reason)\` {extraOptions:{delete:5s}}]`
}]
```
**Syntax:** `timeout [mention/user id] [time] (reason)`

### Ban command
```js
module.exports = [{
    name: "ban",
    aliases: ["BAN", "Ban"],
    code: `

$ban[$guildID;$findMember[$message[1];false];7;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]]
$sendMessage[<@$replaceText[$replaceText[$findMember[$message[1];false];<@;];>;]> has been **banned.** Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]{newEmbed:{footer:Moderator#COLON# $username:$userAvatar[$authorID]}{timestamp}}]

$onlyPerms[banmembers;Uh oh...You do not have \`BAN_MEMBERS\` permission to use this command.{extraOptions:{delete:5s}}]
$onlyIf[$hasPerms[$guildID;$clientID;banmembers]==true;I do not have \`BAN_MEMBERS\` permission.{extraOptions:{delete:5s}}]
$onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh... The user has higher role than me.{extraOptions:{delete:5s}}]
$onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true;$guildID]]];Uh oh... The user has higher role than you.{extraOptions:{delete:5s}}]
$onlyIf[$findUser[$message[1];true]!=$authorID;Do not try to do awkward things like banning yourself.{extraOptions:{delete:5s}}]
$onlyIf[$message[1]!=;The syntax is \`ban [mention/user ID] (reason) \`]`
}]
```
**Syntax:** `ban [mention/user ID] (reason)`

That`s the codes for you all!

## Image gallery
The example image of my codes.
https://cdn.discordapp.com/attachments/1096692386748452946/1137682021599154186/Screenshot_20230806_151021_Discord.jpg
https://cdn.discordapp.com/attachments/1096692386748452946/1137682021922119700/Screenshot_20230806_151051_Discord.jpg
https://cdn.discordapp.com/attachments/1096692386748452946/1137682022299602944/Screenshot_20230806_151117_Discord.jpg
These are discord links so, I want your discretion. 

## Warning
Even though I tested the codes, there are chances that there will be errors. If you encounter any error, contact me (Info will be given in contact me section.)
Also, please understand code before you try to imitate. Just copying won't do anything good for you guys. So, learn basic then use it knowingly.

## Contact me
You can drop any queries or error here. Or if you want faster support, you can DM me in discord,
**Discord**: nanotechpikachu

## Credits
Lemme end this by giving credits
- The wonderful aoi team consisting of staffs and devs for developing this and support.
- I will also extend my hearty thanks to SrPandi who helped me when I got stuck with the reason cutting. Thanks bro
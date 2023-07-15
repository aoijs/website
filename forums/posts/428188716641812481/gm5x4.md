---
title: "RPS game"
description: "Simple RPS game."
authors:
  name: "@faf4a"
  title: Member - 428188716641812481
  userid: "428188716641812481"
  url: https://discord.com/users/428188716641812481
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png
tags: ["aoi.js","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

You need aoi.parser for this for the error message, and the latest aoi.js version for this to work.

This supports:
- Expire message (only for the [prefix]rps command, meaning the request will timeout after about 25 seconds)
- everything else what a normal rps game would

## Code

```js
module.exports = [{
    name: "rps",
    aliases: "rock-paper-scissors",
    code: `
    $editMessage[$get[messageId];<@$findUser[$message]> {newEmbed:{title:RPS Game}{description:Do you accept the challenge to play a game with <@$authorID>?}{timestamp}}{actionRow:{button:Accept:success:accept-game_$findUser[$message]_$authorID_$get[timeoutId]:false}
    {button:Decline:danger:decline-game_$findUser[$message]_$authorID_$get[timeoutId]:false}} {options:{reply:$messageID:false}}]
    $let[timeoutId;$setTimeout[expireGame;25s;{"message": "$get[messageId]", "channel": "$channelID", "requested": "$findUser[$message]"};true]]
    $let[messageId;$sendMessage[Setting up game..;true]]
    $onlyIf[$isBot[$findUser[$message;false]]==false;I guess you could, but why would you play with bots? {options:{reply:$messageID:true}}]
    $onlyIf[$findUser[$message;false]!=$authorID;You could play with yourself but that would be kinda boring, wouldn't it?]
    $onlyIf[$memberExists[$findUser[$message;false]]==true;You gotta mention someone to play with man. {options:{reply:$messageID:true}}]`
}, {
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[<@$get[player1]>;{newEmbed:{title:RPS Game}{description:Select your move below!}{timestamp}{color:Random}};{actionRow:{button::secondary:rps-select-1_$get[player2]_$get[player1]_rock_none:false:🪨}{button::secondary:rps-select-1_$get[player2]_$get[player1]_paper_none:false:📰}{button::secondary:rps-select-1_$get[player2]_$get[player1]_scissors_none:false:✂}}]

    $let[player1;$advancedTextSplit[$interactionData[customId];_;3]]
    $let[player2;$advancedTextSplit[$interactionData[customId];_;2]]

    $stopTimeout[$advancedTextSplit[$interactionData[customId];_;4]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$authorID;You're not one of the players, only <@$advancedTextSplit[$interactionData[customId];_;2]> shall decline or accept this challenge.
    {extraOptions:{interaction}}{options:{ephemeral}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==accept-game;]`
}, {
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:RPS Game}{description:<@$get[player2]> declined the challenge therefore there will be no game!}{color:Red}{timestamp}}]

    $let[player1;$advancedTextSplit[$interactionData[customId];_;3]]
    $let[player2;$advancedTextSplit[$interactionData[customId];_;2]]
    
    $stopTimeout[$advancedTextSplit[$interactionData[customId];_;4]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$authorID;You're not one of the players, only <@$advancedTextSplit[$interactionData[customId];_;2]> shall decline or accept this challenge.
    {extraOptions:{interaction}}{options:{ephemeral}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==decline-game;]`
}, {
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[<@$get[player2]>;{newEmbed:{title:RPS Game}{description:Select your move below!}{timestamp}{color:Random}};{actionRow:{button::secondary:rps-select-2_$get[player2]_$get[player1]_$get[action]_rock:false:🪨}{button::secondary:rps-select-2_$get[player2]_$get[player1]_$get[action]_paper:false:📰}{button::secondary:rps-select-2_$get[player2]_$get[player1]_$get[action]_scissors:false:✂}}]

    $let[action;$advancedTextSplit[$interactionData[customId];_;4]]
    $let[player1;$advancedTextSplit[$interactionData[customId];_;3]]
    $let[player2;$advancedTextSplit[$interactionData[customId];_;2]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;3]==$authorID;It's not your turn yet, or you aren't even apart of this. Please wait for <@$advancedTextSplit[$interactionData[customId];_;3]> to decide. {extraOptions:{interaction}}{options:{ephemeral}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==rps-select-1;]
`
}, {
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[;{newEmbed:{title:RPS Game}{description:$get[checkWinner]}{color:Gold}{timestamp}};{actionRow:{button:$username[$get[player1]] VS $username[$get[player2]]:secondary:displayMatch:true}}]

    $let[checkWinner;$replaceText[$replaceText[$checkCondition[$get[action2]-$get[action1]==scissors-paper];true;<@$get[player1]> Wins! ✂️  cuts 📃];false;$replaceText[$replaceText[$checkCondition[$get[action2]-$get[action1]==paper-rock];true;<@$get[player1]> Wins! 📃  covers 🪨];false;$replaceText[$replaceText[$checkCondition[$get[action2]-$get[action1]==rock-scissors];true;<@$get[player1]> Wins! 🪨  destroys ✂️];false;$replaceText[$replaceText[$checkCondition[$get[action2]-$get[action1]==rock-rock];true;Draw! 🪨  🪨];false;$replaceText[$replaceText[$checkCondition[$get[action2]-$get[action1]==paper-paper];true;Draw! 📃  📃];false;$replaceText[$replaceText[$checkCondition[$get[action2]-$get[action1]==scissors-scissors];true;Draw! ✂️  ✂️];false;$replaceText[$replaceText[$checkCondition[$get[action2]-$get[action1]==paper-scissors];true;<@$get[player2]> Wins! 📃  gets cut by ✂️];false;$replaceText[$replaceText[$checkCondition[$get[action2]-$get[action1]==rock-paper];true;<@$get[player2]> Wins! 🪨  gets covered by 📃];false;$replaceText[$replaceText[$checkCondition[$get[action2]-$get[action1]==scissors-rock];true;<@$get[player2]> Wins! ✂️  gets destroyed by 🪨 ];false;Invalid move.]]]]]]]]]]

    $let[action2;$advancedTextSplit[$interactionData[customId];_;4]]
    $let[action1;$advancedTextSplit[$interactionData[customId];_;5]]
    $let[player1;$advancedTextSplit[$interactionData[customId];_;3]]
    $let[player2;$advancedTextSplit[$interactionData[customId];_;2]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$authorID;It's not your turn yet, or you aren't even apart of this. Please wait for <@$advancedTextSplit[$interactionData[customId];_;2]> to decide. {extraOptions:{interaction}}{options:{ephemeral}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==rps-select-2;]
`
}, {
    name: "expireGame",
    type: "timeout",
    code: `
    $editMessage[$timeoutData[message];{newEmbed:{title:Expired request!}{description:<@$timeoutData[requested]> failed to respond within **25 seconds** and therefore I cancelled this request!}{color:Red}{timestamp}};$timeoutData[channel]]`
}]
```

## Preview

![preview](https://cdn.discordapp.com/attachments/832704676096245800/1129446731449372672/image.png)

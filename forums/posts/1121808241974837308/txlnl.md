---
title: "Guess the country game"
description: "a guess the country game using $awaitMessages the user gets a country flag and he has to guess it if the user guesses it right the bot mentions him and says Gg
"
authors:
  name: "@lokamoka"
  title: Member - 1121808241974837308
  userid: "1121808241974837308"
  url: https://discord.com/users/1121808241974837308
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1121808241974837308.png
tags: ["v6","aoi.js","Other"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

code:
```js
module.exports = [{
  name: "county_guess",
  type: "interaction",
  prototype: "slash",
  code: `
  $interactionReply[;{newEmbed:{image:https://flagcdn.com/w2560/$tolowercase[$getObjectProperty[countries[$random[0;250]].code_2]].jpg}{color:Random}}]
  $awaitMessages[$channelID;everyone;15s;$toLowercase[$getObjectProperty[countries[$random[0;250]].name_en]];countrygame;Time's up, no one found good answer, it was $getObjectProperty[countries[$random[0;250]].name_en];{"country": "$toLowerCase[$getObjectProperty[countries[$random[0;250]].name_en]]"}]
  
  $createObject[$jsonRequest[https://www.jsonkeeper.com/b/L23E]]
  `
  },{
name: "countrygame",
type: "awaited",
code: `
Gg <@$authorID>, it was $awaitData[country]
`
  }];
```
slash command create code:
```js
module.exports = {
  name: "create",
  code: `
  $createApplicationCommand[global;county_guess;starts a guess the country game;true;slash]
  `
}
```

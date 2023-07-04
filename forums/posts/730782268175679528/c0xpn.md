---
title: "Currency Command Balance"
description: "A Simple Currency Balance Command"
authors:
  name: "@mingweiop"
  title: Member - 730782268175679528
  userid: "730782268175679528"
  url: https://discord.com/users/730782268175679528
  image_url: https://cdn.discordapp.com/avatars/730782268175679528/e090744f6341f2e081bb9a4fa61c19ab.png
tags: [ "v6","aoi.js" ]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports = [{
    name: "balance",
    aliases: "bal",
    code: `$author[1;$username[$findUser[$message[1];true]];$userAvatar[$findUser[$message[1];true]]]
$addField[1;Bank;$numberSeparator[$getGlobalUserVar[bank;$findUser[$message[1];true]]];true]
$addField[1;Cash;$numberSeparator[$getGlobalUserVar[cash;$findUser[$message[1];true]]];true]
$color[1;Random]
$footer[1;Command Executed by: $username]`
}]

```
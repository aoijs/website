---
title: "Short code of Command Handler Index"
description: "A short Aoi.js@5.5.5 command handler index"
authors:
  name: "@autista"
  title: Member - 670075847306379270
  userid: "670075847306379270"
  url: https://discord.com/users/670075847306379270
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/670075847306379270.png
tags: ["aoi.js"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

```const aoijs = require("aoi.js")
const bot = new aoijs.AoiClient({
  token: "",
  prefix: "!",
  intents: "all"
})```

bot.onMessage()
bot.onInteractionCreate()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")
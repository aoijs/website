---
title: "Prefix custom function"
description: "Returns the prefix you used to call the command."
authors:
  name: "@erichanuwu"
  title: Member - 1077733015846932530
  userid: "1077733015846932530"
  url: https://discord.com/users/1077733015846932530
  image_url: https://cdn.discordapp.com/avatars/1077733015846932530/247b8ec904e81fdb227e545afaf83a06.png
tags: ["aoi.js","v6"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

### Usage
```
$prefix
```
### Code
```js
bot.functionManager.createFunction({
    name: "$prefix",
    type: "djs",
    async code(d) {
        const data = d.util.aoiFunc(d);
        const Interpreter = require("aoi.js/src/interpreter.js");
        const prefixes = Array.isArray(d.client.aoiOptions.prefix) ? d.client.aoiOptions.prefix : [d.client.aoiOptions.prefix];
        const prefix = d.message.content.split(/ +/g).shift().trim();
        const interpreted = [];
        for (const pr of prefixes) {
            const result = (await Interpreter(d.client, d.message, d.args, { name: "PrefixParser", code: pr }, d.client.db, true)).code;
            interpreted.push(result)
        }
        data.result = interpreted.filter(pr => prefix.startsWith(pr));
        return {
            code: d.util.setCode(data)
        }
    }
});
```
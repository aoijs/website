---
title: "commands list"
description: "A djs code to filter and get your commands list"
authors:
  name: "@ahoemi"
  title: Member - 715852000096419900
  userid: "715852000096419900"
  url: https://discord.com/users/715852000096419900
  image_url: https://cdn.discordapp.com/avatars/715852000096419900/d3a037287c6c6739b0b4b4121d3b356a.png
tags: ["Other","v6"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

# Code
```js
bot.functionManager.createFunction({
  name: "$commands",
  type: "djs",
  code: async (d) => {
const data = d.util.aoiFunc(d);
const [arg] = data.inside.splits;

const type = arg.split(':')[0]
const value = arg.split(':')[1]

const output = d.client.cmd.default
  .filter(x=> x[type] == value )
  .map(x => x.name)
  .filter(x => x !== '$alwaysExecute')
  .join(", ")

data.result = output

return { code: d.util.setCode(data) }
}
})
```
# Usage
```
$commands[category:misc]
```
Option and value are separated by :   
Invalid option and value will cause error
Its CaSeSeNsItIvE

## Image Example
![example](https://media.discordapp.net/attachments/1022533781040672839/1123866753219432508/image0.jpg?raw=true)

#### Ping for help!
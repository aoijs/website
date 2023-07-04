---
title: "toToggleCase"
description: "A custom d.js function for text modification."
authors:
  name: "@ahoemi"
  title: Member - 715852000096419900
  userid: "715852000096419900"
  url: https://discord.com/users/715852000096419900
  image_url: https://cdn.discordapp.com/avatars/715852000096419900/4dd9ab5b17ca6c07e4da71746cd0eca9.png
tags: ["v6","Other"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
bot.functionManager.createFunction({
  name: "$toToggleCase",
  type: "djs",
  code: (d) => {
 const data = d.util.aoiFunc(d);
if (data.err) return d.error(data.err);
 const [ texts ] = data.inside.splits
const output = texts
      .split(" ")
      .map(
        (text) =>
          text.addBrackets().slice(0, 1).toLowerCase() + text.addBrackets().slice(1).toUpperCase(),
        ).join(" ");

data.result = output
    return {
        code: d.util.setCode(data),
    };
}
})
```

## Usage

`$toToggleCase[This Is useless fr]`   
This will result in `tHIS iS uSELESS fR`

![image](https://media.discordapp.net/attachments/902553397281030208/1120917182365306981/image0.jpg)

## Where to use this code?

Place this in your bottom of main file aka index.js
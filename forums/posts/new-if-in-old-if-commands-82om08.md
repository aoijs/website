---
title: "New if in old if commands"
description: "This code allows you to use the new `$if` in old `$if` commands"
authors:
  name: "@artemcurious"
  title: Member
  url: https://discord.com/users/591690683509768223
  image_url: https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png
tags: ["v6","aoi.js"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

This code allows you to use the new `$if` in old `$if` commands!
This can be really useful in some cases.

### Content

This code creates a new function, called `$ifv6` that will act as the new `$if` anywhere you run it!
So, if you have a command with old if enabled:
```js
  bot.command({
    name: `hi`,
    $if: "old",
    code: `hello $reply
$if[a==a]
a does equal a!
$else
a does not equal a, we're in a different dimension...
$endif

$ifv6[b==b;b equals b!;b equals something other than b]`
  });
```
We can use the new `$if` in an old `$if` command!

### The code
```js
bot.functionManager.createFunction({
  name: "$ifv6",
  type: "djs",
  code: async d => bot.functionManager.cache.get("if").code(d)
})
```

Being fairly simple, it uses the new `$if` through aoi.js' code.
That's it, enjoy coding your bot!
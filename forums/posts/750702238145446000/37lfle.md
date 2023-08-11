---
title: 'Button that cant be pressed until u respond first'
description: 'if u press the button once, it will work like normal but if you press it again without responding to the awaited command, the button will tell u to first respond to the awaited command'
authors:
  name: '@kingleooo'
  title: Member - 750702238145446000
  userid: '750702238145446000'
  url: https://discord.com/users/750702238145446000
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/750702238145446000.png
tags: ["aoi.js","v6","Other"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---
    
```js
In this wiki, I'll show you how to create an awaited command with buttons that you can only press once and can't be pressed again until you have responded to the command. Here is the code:

```
bot.interactionCommand({
    name: "example",
    prototype: "button",
    code: `
$setUserVar[awaiting;yes]
PUT CODE HERE
$onlyif[$getUserVar[awaiting]!=yes;you have pressed the button already]
`
})

bot.awaitedCommand({
    name: 'example',
    code: `
PUT YOUR CODE HERE
$setUserVar[awaiting;no]
`
})
```

# How to add it in your command

**Step1**: Make a new variable named "awaiting"

**Step2**: Paste the code above into your bot's index.js file.

**Step3**: Copy and Paste your interaction code into the `bot.interactionCommand`, then paste the awaited command into the `bot.awaitedCommand`

**Step4**: That's it! ***Enjoy!!***


```
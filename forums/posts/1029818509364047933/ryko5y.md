---
title: "Random memes"
description: "They are funny images of trending memes totally in Spanish.

Requires the package: meme-muichiro-english

Install it: npm i meme-muichiro-spanish"
authors:
  name: "@pixeles10"
  title: Member - 1029818509364047933
  userid: "1029818509364047933"
  url: https://discord.com/users/1029818509364047933
  image_url: https://cdn.discordapp.com/avatars/1029818509364047933/3223898f440e1bba59398a164bd3b38f.png
tags: ["aoi.js","v6"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

module.exports = {
  name: "memes",
  code: `
$title[1;Random Memes]
$color[1;Blue]
$image[1;$get[memes]]
$djsEval[(async() => {
const Memes = require('meme-muichiro-spanish')
const meme = await Memes()
d.vars['memes'] = meme.data.url
d.data.vars = d.vars
})()]`
}